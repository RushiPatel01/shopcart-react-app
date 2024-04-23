import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/firebase.config";

const desc =
  "Energistia an deliver atactia metercs after avsionary apropria transition enterpris an sources application emerging psd template.";

const ProductDisplay = ({ item }) => {
  const { title, id, price, seller, ratingsCount, quantity, imageUrl } = item;

  const [prequantity, setQuantity] = useState(quantity || 1);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");
  const [products, setProducts] = useState([]);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity((prequantity) => prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prequantity) => prequantity + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      id: id,
      title: title,
      imageUrl: imageUrl,
      color: color,
      coupon: coupon,
      price: price,
      size: size,
      quantity: prequantity,
    };
    console.log(product);
    try {
      const cartCollection = collection(db, "cartItems");
      await addDoc(cartCollection, product);
      console.log("Product added to Firestore");
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    //update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    //reset form field
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  const handleAddToCart = async () => {
    await getDocs(collection(db, "products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(newData);
      console.log(newData);
    });
    // window.location.reload();
  };
  console.log("products", products);

  return (
    <div>
      <div>
        <h4>{title}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* size */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* cart plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupon field */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={handleCoupon}
              value={coupon}
            />
          </div>

          {/* btn section  */}
          <button onClick={handleAddToCart} type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;

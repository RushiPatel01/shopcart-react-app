import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import { Search } from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";
import { db } from "../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore/lite";

const shopResults = "Showing 01-12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(newData);
        setProducts(newData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchProducts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // function to change current page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filter products based on category

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });

    setSelectedCategory(curcat);
    setProducts(newItem);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{shopResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* Loader while loading */}
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    {/* product cards  */}
                    <div>
                      <ProductCards
                        GridList={GridList}
                        products={currentProducts}
                      />
                    </div>

                    <Pagination
                      productsPerPage={productsPerPage}
                      totalProducts={products.length}
                      paginate={paginate}
                      activePage={currentPage}
                    />
                  </>
                )}
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

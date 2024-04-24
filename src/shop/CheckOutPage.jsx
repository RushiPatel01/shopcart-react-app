import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../components/modal.css";
import { useLocation, useNavigate } from "react-router-dom";
import { orderCollection } from "../firebase/firebase.config";
import { addDoc } from "firebase/firestore/lite";

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    email: "",
    cardHolderName: "",
    extraInfo: "",
  });

  // Handle Tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  // Show the modal
  const handleShow = () => setShow(true);

  // Close the modal
  const handleClose = () => setShow(false);

  // Direct to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle order confirmation
  const handleOrderConfirm = async () => {
    try {
      // Create an order object with payment method
      const orderData = {
        paymentMethod: activeTab,
        ...formData,
      };

      // Add the order to the orders collection
      await addDoc(orderCollection, orderData);

      // Alert the user that the order is successful
      alert("Your Order is placed Successfully!");

      // Clear the cart in local storage
      localStorage.removeItem("cart");

      // Navigate back to the previous page
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error adding order: ", error);
      // Handle error if needed
    }
  };

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mb-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      onClick={() => handleTabChange("visa")}
                    >
                      <img
                        src="https://i.imgur.com/sB4jftM.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      onClick={() => handleTabChange("paypal")}
                    >
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        alt=""
                        width="80"
                      />
                    </a>
                  </li>
                </ul>

                {/* contents */}

                <div className="tab-content" id="myTabContent">
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/*visa tab content */}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="cardHolderName"
                            id="name"
                            className="form-control"
                            required
                            value={formData.cardHolderName}
                            onChange={handleChange}
                          />
                          <span>CardHolder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="cardNumber"
                            id="number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                            value={formData.cardNumber}
                            onChange={handleChange}
                          />
                          <span>Card Number</span> <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="expirationDate"
                              id="expirationDate"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                              value={formData.expirationDate}
                              onChange={handleChange}
                            />
                            <span>Expiration Date</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="cvv"
                              id="cvv"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                              value={formData.cvv}
                              onChange={handleChange}
                            />
                            <span>CVV</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <span>Enter Your email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <span>Your Name</span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="extraInfo"
                              id="extraInfo"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                              value={formData.extraInfo}
                              onChange={handleChange}
                            />
                            <span>Extra Info</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="extraInfo2"
                              id="extraInfo2"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                              value={formData.extraInfo2}
                              onChange={handleChange}
                            />
                            <span>Extra Info 2</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Add Paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* payment disclaimer */}

                <p className="mt-3 px-4 p-Desclaimer">
                  <em>Payment Disclaimer: </em>In no event shall payment or
                  partial payment by owner for any material or service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* Loader */}
      {loading && <div className="loader">Loading...</div>}
    </div>
  );
};

export default CheckOutPage;

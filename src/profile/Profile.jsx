import React from "react";
import RushiPatel from "../assets/images/about/icon/rushipatel.jpg";
import PageHeader from "../components/PageHeader";

const Profile = () => {
  return (
    <div>
      <PageHeader title={"My Profile"} curPage={"Profile"} />
      <div className="about-section style-3 padding-tb">
        <div className="container">
          <div className="main-body">
            {/* <!-- Breadcrumb --> */}
            <nav aria-label="breadcrumb" className="main-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  UserProfile
                </li>
              </ol>
            </nav>
            {/* <!-- /Breadcrumb --> */}

            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={RushiPatel}
                        alt="Admin"
                        className="object-fit-sm-contain border rounded"
                        width="100px"
                      />
                      <div className="mt-3">
                        <h4>Rushi Patel</h4>
                        <p className="text-secondary mb-1">React Developer</p>
                        <p className="text-muted font-size-sm">
                          Bay Area, BlissLers Technolabs, Ahmedabad
                        </p>
                        <button className="btn btn-warning">Follow</button>
                        <button className="btn btn-outline-warning">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github mr-2 icon-inline"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Github
                      </h6>
                      <span className="text-secondary">
                        <a href="https://github.com/RushiPatel01/">
                          @RushiPatel01
                        </a>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter mr-2 icon-inline text-info"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                        Twitter
                      </h6>
                      <span className="text-secondary">
                        <a href="https://twitter.com/rushikumar0109">
                          @rushikumar0109
                        </a>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram mr-2 icon-inline text-danger"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        Instagram
                      </h6>
                      <span className="text-secondary">
                        <a href="https://www.instagram.com/rushipatel0109/">
                          RushiPatel
                        </a>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 className="mb-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-facebook mr-2 icon-inline text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        Facebook
                      </h6>
                      <span className="text-secondary">
                        <a href="https://www.facebook.com/">RushiPatel</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Patel RushiKumar Baldevbhai
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        rushipatel09965@gmail.com
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">8849294817</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">9724264222</div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address:</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        46, IstKrupa Society, Mahesana
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          Project Status
                        </h6>
                        <small>Web Design</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Website Markup</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "72%" }}
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>One Page</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Mobile Template</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Firebase Database</small>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "66%" }}
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">
                          Company Details
                        </h6>
                        <div className="row">
                          <div className="col-3">
                            <h6 className="mb-0 h6 small">Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            BlissLers Technolabs
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0 h6 small">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            ravindra@blisslers.com
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0 h6 small">Phone</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            +91 9913055666
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0 h6 small">Addres</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            617,Fortune Business Hub,Science City
                            Rd,Thaltej,Ahmedabad,Gujarat 380060
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

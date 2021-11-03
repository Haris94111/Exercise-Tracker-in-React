import React from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import img1 from "../plugins/images/large/img1.jpg";
import varun from "../plugins/images/users/varun.jpg";
import { withRouter } from "react-router-dom";
function Profile() {
  return (
    <>
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <Header />
        <LeftSideBar />

       
        <div className="page-wrapper">
          
          <div className="page-breadcrumb bg-white">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title">Profile page</h4>
              </div>
              <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                <div className="d-md-flex">
                  <ol className="breadcrumb ms-auto">
                    <li>
                      <a href="#" className="fw-normal">
                        Dashboard
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
           
          </div>
         
        
          <div className="container-fluid">
            <div className="row">
              {/* <!-- Column --> */}
              <div className="col-lg-4 col-xlg-3 col-md-12">
                <div className="white-box">
                  <div className="user-bg">
                    <img width="100%" alt="user" src={img1} />
                    <div className="overlay-box">
                      <div className="user-content">
                        <a href="javascript:void(0)">
                          <img
                            src={varun}
                            className="thumb-lg img-circle"
                            alt="img"
                          />
                        </a>
                        <h4 className="text-white mt-2">Haris</h4>
                        <h5 className="text-white mt-2">Haris@Haris.com</h5>
                      </div>
                    </div>
                  </div>
                  <div className="user-btm-box mt-5 d-md-flex">
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1>2</h1>
                      <p>Hours</p>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1>7</h1>
                      <p>Days</p>
                    </div>
                    <div className="col-md-4 col-sm-4 text-center">
                      <h1>10</h1>
                      <p>Hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-8 col-xlg-9 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form className="form-horizontal form-material">
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Full Name</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="form-control p-0 border-0"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label for="example-email" className="col-md-12 p-0">
                          Email
                        </label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="email"
                            placeholder="email@email.com"
                            className="form-control p-0 border-0"
                            name="example-email"
                            id="example-email"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Password</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="password"
                            value="password"
                            className="form-control p-0 border-0"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Phone No</label>
                        <div className="col-md-12 border-bottom p-0">
                          <input
                            type="text"
                            placeholder="123 456 7890"
                            className="form-control p-0 border-0"
                            value="03123456789"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-md-12 p-0">Message</label>
                        <div className="col-md-12 border-bottom p-0">
                          <textarea
                            rows="5"
                            className="form-control p-0 border-0"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="col-sm-12">Select Country</label>

                        <div className="col-sm-12 border-bottom">
                          <select
                            className="
                            form-select
                            shadow-none
                            p-0
                            border-0
                            form-control-line
                          "
                          >
                            <option>Pakistan</option>
                            <option>India</option>
                            <option>America</option>
                            <option>Afganistan</option>
                            <option>UAE</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <div className="col-sm-12">
                          <button className="btn btn-success">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          
          <footer className="footer text-center">2021 © Fitness Guru</footer>
          
        </div>
      </div>
    </>
  );
}

export default withRouter(Profile);

import React from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";

function EditActivity() {
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
        
        <div className="page-wrapper" style={{ minHeight: "250px" }}>
          <div className="page-breadcrumb bg-white">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title">New Activity</h4>
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
              <div className="col-md-12">
                <div className="white-box">
                  <h3 className="box-title">Add a New Activity</h3>

                  <div className="card">
                    <div className="card-body">
                      <form className="form-horizontal form-material">
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0">Name</label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="text"
                              placeholder="Gym"
                              className="form-control p-0 border-0"
                              value="Haris"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label for="dateExample" className="col-md-12 p-0">
                            Date
                          </label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="date"
                              placeholder="johnathan@admin.com"
                              className="form-control p-0 border-0"
                              name="dateExample"
                              id="dateExample"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0">
                            Duration In mints
                          </label>
                          <div className="col-md-12 border-bottom p-0">
                            <input
                              type="number"
                              value="5"
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
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-md-12 p-0">Description</label>
                          <div className="col-md-12 border-bottom p-0">
                            <textarea
                              rows="5"
                              className="form-control p-0 border-0"
                            >
                              Some Dummy text to be updated later on
                            </textarea>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label className="col-sm-12">Activity Type</label>

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
                              <option>Run</option>
                              <option className="active">Bicycle Ride</option>
                              <option>Swim</option>
                              <option>Walk</option>
                              <option>Hike</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <div className="col-sm-12">
                            <button className="btn btn-success">
                              <i className="fas fa-plus"></i>
                              Update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
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

export default EditActivity;

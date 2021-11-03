import React from "react";
import one from "../plugins/images/cardImages/1.jpeg";
import two from "../plugins/images/cardImages/2.jpeg";
import three from "../plugins/images/cardImages/3.jpeg";

function DashboardContent() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb bg-white">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Dashboard</h4>
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
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Hours Workout Today</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash">
                      <canvas
                        width="67"
                        height="30"
                        style={{
                          display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-success">2</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Workout Streak</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash2">
                      <canvas
                        width="67"
                        height="30"
                        style={{
                          display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-purple">7 Days</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="white-box analytics-info">
                <h3 className="box-title">Weekly Hours</h3>
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                  <li>
                    <div id="sparklinedash3">
                      <canvas
                        width="67"
                        height="30"
                        style={{
                          display: "inline-block",
                          width: "67px",
                          height: "30px",
                          verticalAlign: "top",
                        }}
                      ></canvas>
                    </div>
                  </li>
                  <li className="ms-auto">
                    <span className="counter text-info">10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div>
            <div className="row justify-content-center no-gutters">
              <div className="card-group mx-auto">
                <div className="card">
                  <img src={one} className="card-img-top" alt="Card 1 image" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="./AddNewActivity.html"
                        className="badge rounded-pill bg-primary card1"
                      >
                        <i className="fas fa-plus"></i>
                        Add New Activity
                      </a>
                    </h5>
                    <p className="card-text">
                      Here you can add new activities by clicking button above.
                    </p>
                  </div>
                </div>
                <div className="card mx-4">
                  <img src={two} className="card-img-top" alt="card2 Image" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="./allExercises"
                        className="badge rounded-pill bg-success card1"
                      >
                        <i className="fas fa-info"></i>
                        View All Activity
                      </a>
                    </h5>
                    <p className="card-text">
                      Here you can view all activities by clicking button above.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={three}
                    className="card-img-top"
                    alt="card 3 image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="./allExercises"
                        className="badge rounded-pill bg-danger card1"
                      >
                        <i className="fas fa-pause-circle"></i>
                        Pending Activities
                      </a>
                    </h5>
                    <p className="card-text">
                      Here you can view all activities by clicking button above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="white-box">
                <div className="d-md-flex mb-3">
                  <h3 className="box-title mb-0">Exercise Data</h3>
                  <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                    <select className="form-select shadow-none row border-top">
                      <option>March 2021</option>
                      <option>April 2021</option>
                      <option>May 2021</option>
                      <option>June 2021</option>
                      <option>July 2021</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap">
                    <thead>
                      <tr>
                        <th className="border-top-0">#</th>
                        <th className="border-top-0">Activity Type</th>
                        <th className="border-top-0">Description</th>
                        <th className="border-top-0">Completed %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="txt-oflo">Walk</td>
                        <td>Outdoor Activity</td>
                        <td>
                          <div className="progress" style={{ height: "25px" }}>
                            <div
                              className="
                                progress-bar progress-bar-striped
                                bg-danger
                              "
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              75%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="txt-oflo">Swim</td>
                        <td>Indoor Activity</td>
                        <td>
                          <div className="progress" style={{ height: "25px" }}>
                            <div
                              className="
                                progress-bar progress-bar-striped
                                bg-danger
                              "
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              25%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="txt-oflo">Cycling</td>
                        <td>Outdoor Activity</td>
                        <td>
                          <div className="progress" style={{ height: "25px" }}>
                            <div
                              className="
                                progress-bar progress-bar-striped
                                bg-danger
                              "
                              role="progressbar"
                              style={{ width: "65%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              65%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="txt-oflo">Running</td>
                        <td>Outdoor Activity</td>
                        <td>
                          <div className="progress" style={{ height: "25px" }}>
                            <div
                              className="
                                progress-bar progress-bar-striped
                                bg-danger
                              "
                              role="progressbar"
                              style={{ width: "33%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              33%
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td className="txt-oflo">Hiking</td>
                        <td>Outdoor Activity</td>
                        <td>
                          <div className="progress" style={{ height: "25px" }}>
                            <div
                              className="
                                progress-bar progress-bar-striped
                                bg-danger
                              "
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={100}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              70%
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <footer className="footer text-center">2021 © Fitness Guru</footer>
        
      </div>
    </>
  );
}

export default DashboardContent;

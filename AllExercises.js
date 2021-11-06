import React from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import { FaTrash, FaEdit } from "react-icons/fa";
import { BiCheckbox } from "react-icons/bi";

function AllExercises() {
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
                <h4 className="page-title">All Exercises</h4>
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
              <div className="col-sm-12">
                <div className="white-box">
                  <h3 className="box-title">Basic Table</h3>
                  <a
                    href="./allExercises"
                    className="btn btn-danger position-relative text-white my-auto"
                  >
                    Pending
                    <span
                      className="
                      position-absolute
                      top-0
                      start-100
                      translate-middle
                      badge
                      rounded-pill
                      bg-primary
                    "
                    >
                      5<span className="visually-hidden">unread messages</span>
                    </span>
                  </a>

                  <div className="table-responsive">
                    <table className="table text-nowrap">
                      <thead>
                        <tr>
                          <th className="border-top-0">#</th>
                          <th className="border-top-0">Activity Name</th>
                          <th className="border-top-0">Description</th>
                          <th className="border-top-0">Activity Type</th>
                          <th className="border-top-0">Duration in Mints.</th>
                          <th className="border-top-0">Date</th>

                          <th className="border-top-0">CRUD Operations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Haris</td>
                          <td>Outdoor activity</td>
                          <td>Swim</td>
                          <td>5</td>
                          <td>10-07-2021</td>
                          <td>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaTrash />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaEdit />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <BiCheckbox />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Ahmed</td>
                          <td>Outdoor activity</td>
                          <td>Hike</td>
                          <td>10</td>
                          <td>10-07-2021</td>
                          <td>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaTrash />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaEdit />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <BiCheckbox />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Tuseef</td>
                          <td>Outdoor activity</td>
                          <td>Walk</td>
                          <td>25</td>
                          <td>10-07-2021</td>
                          <td>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaTrash />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="EditActivity.html"
                              aria-expanded="false"
                            >
                              <FaEdit />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <BiCheckbox />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Raza</td>
                          <td>Outdoor activity</td>
                          <td>Bicycle Ride</td>
                          <td>10</td>
                          <td>10-07-2021</td>
                          <td>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaTrash />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaEdit />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <BiCheckbox />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Amna</td>
                          <td>Outdoor activity</td>
                          <td>Swim</td>
                          <td>5</td>
                          <td>10-07-2021</td>
                          <td>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaTrash />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaEdit />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <BiCheckbox />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Ali</td>
                          <td>Outdoor activity</td>
                          <td>Run</td>
                          <td>30</td>
                          <td>10-07-2021</td>
                          <td>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaTrash />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <FaEdit />
                            </a>
                            <a
                              className="
                              sidebar-link
                              waves-effect waves-dark
                              sidebar-link
                            "
                              href="./editActivity"
                              aria-expanded="false"
                            >
                              <BiCheckbox />
                            </a>
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
      </div>
    </>
  );
}

export default AllExercises;

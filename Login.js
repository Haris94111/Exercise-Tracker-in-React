import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import "../App.css";
import "../login/vendor/bootstrap/css/bootstrap.min.css";
import "../login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../login/fonts/iconic/css/material-design-iconic-font.min.css";
import "../login/vendor/animate/animate.css";
import "../login/vendor/css-hamburgers/hamburgers.min.css";
import "../login/vendor/animsition/css/animsition.min.css";
import "../login/vendor/select2/select2.min.css";
import "../login/vendor/daterangepicker/daterangepicker.css";
import "../login/css/util.css";
import "../login/css/main.css";
function Login() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = () => {};
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49"> Login </span>

              <div
                className="wrap-input100 validate-input m-b-23"
                data-validate="Username is reauired"
              >
                <span className="label-input100">Username</span>
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Type your username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span className="label-input100">Password</span>
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Type your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>

              <div className="text-right p-t-8 p-b-31">
                <a href="./forgotPassword"> Forgot password? </a>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <a href="./dashboard" className="login100-form-btn">
                    Login
                  </a>
                </div>
              </div>

              <div className="txt1 text-center p-t-54 p-b-20">
                <span> Or Sign Up Using </span>
              </div>

              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <FaFacebook />
                </a>

                <a href="#" className="login100-social-item bg2">
                  <FaTwitter />
                </a>

                <a href="#" className="login100-social-item bg3">
                  <FaGoogle />
                </a>
              </div>

              <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17"> Or Sign Up Using </span>

                <a href="#" className="txt2">
                  {" "}
                  Sign Up{" "}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="dropDownSelect1"></div>
    </>
  );
}

export default Login;

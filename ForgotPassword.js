import React from "react";
import { useEffect } from "react";
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
import { useState } from "react/cjs/react.development";

function ForgotPassword() {
  const [email, setEmail] = useState();
  const handleReset = () => {
    console.log(email);
  };
  return (
    <>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form class="login100-form validate-form">
              <span class="login100-form-title p-b-49"> Reset Password </span>

              <div
                class="wrap-input100 validate-input m-b-23"
                data-validate="Email is required"
              >
                <span class="label-input100">Email</span>
                <input
                  class="input100"
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span class="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                  <div class="login100-form-bgbtn"></div>
                  <a
                    href="./forgotPassword"
                    class="login100-form-btn"
                    onClick={handleReset}
                  >
                    Reset Password
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="dropDownSelect1"></div>
    </>
  );
}

export default ForgotPassword;

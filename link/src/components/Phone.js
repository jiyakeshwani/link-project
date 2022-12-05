import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import auth from "../firebase";
import { useAuthContext } from "../context/AuthContext";

import { async } from "@firebase/util";

function Phone() {
  const { number, setUpRecaptcha, validation, handleChange } =
    useAuthContext();

  const getOtp = (e) => {
    e.preventDefault();

    try {
      const response = setUpRecaptcha(number);
      console.log(response, "hello");
      setConfirmedOtp(response);
      navigate("/otp");
    } catch (err) {
      console.log(err.message);
    }
    console.log(number);
  };

  return (
    <div className="signup-page">
      <div className="phone">
        <Link to="/email">
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </Link>
        <div className="flex center column">
          <h4 className="h5">Enter your phone number</h4>
          <p className="email-p phone-p">
            We’ll only use this to securely log you in and manage your account.
          </p>
          <form onSubmit={getOtp}>
            <PhoneInput
              className="email phoneinput"
              defaultCountry="US"
              value={number}
              onChange={handleChange}
              placeholder="Mobile number"
            />
          </form>
          <div id="recaptcha-container"> </div>

          <p className="num-p">
            By continuing you agree to the Terms and acknowledge the Privacy
            Policy.
          </p>
          {validation ? (
            <Link onClick={getOtp} className="signup-btn" to="/otp">
              Next
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Phone;

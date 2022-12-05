import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import auth from "../firebase";
import { useAuthContext } from "../context/AuthContext";

import { async } from "@firebase/util";

function Phone() {
  const navigate = useNavigate();
  const { number, setUpRecaptcha, validation, handleChangeNum } =
    useAuthContext();
  let [otp, setOtp] = useState(new Array(6).fill(""));
  let [flag, setFlag] = useState(false);
  let [confirmedOtp, setConfirmedOtp] = useState("");

  function handleChangeOtp(element, index) {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }

  const getOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await setUpRecaptcha(number);
      console.log(response, "hello");
      setConfirmedOtp(response);
      setFlag(true);
    } catch (err) {
      console.log(err.message);
    }
    console.log(number);
  };

  function verifyOtp(e) {
    e.preventDefault();
    console.log("verified");
    if (otp === "" || otp === null) return;
    try {
      confirmedOtp.confirm(otp);
      console.log(otp);
      navigate("/name");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div
        className="signup-page"
        style={{ display: !flag ? "block" : "none" }}
      >
        <div className="phone">
          <Link to="/email">
            <span class="material-symbols-outlined material-symbols-outlined1">
              arrow_back_ios
            </span>
          </Link>
          <div className="flex center column">
            <h4 className="h5">Enter your phone number</h4>
            <p className="email-p phone-p">
              We’ll only use this to securely log you in and manage your
              account.
            </p>
            <form onSubmit={getOtp}>
              <PhoneInput
                className="email phoneinput"
                defaultCountry="IN"
                value={number}
                onChange={handleChangeNum}
                placeholder="Mobile number"
              />
            </form>
            <div id="recaptcha-container"> </div>

            <p className="num-p">
              By continuing you agree to the{" "}
              <strong className="color-green">Terms </strong> and acknowledge
              the <strong className="color-green">Privacy Policy.</strong>
            </p>
            {validation ? (
              <Link
                onClick={getOtp}
                className="signup-btn margin-top"
                to="/name"
              >
                Next
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div
        className="signup-page  "
        style={{ display: flag ? "block" : "none" }}
      >
        <div className="phone">
          <div className="flex , space-between">
            <Link to="/email">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </Link>
            <p className="help-phone-page">Help</p>
          </div>
          <div className="flex center column">
            <h4 className="h4">We sent you a text</h4>
            <p className="phone-p">
              Enter the 6-digit code sent to your phone number {number}:
            </p>
            <form className="otp" onSubmit={verifyOtp}>
              {otp.map((data, index) => {
                return (
                  <input
                    type="text"
                    name="otp"
                    maxLength="1"
                    className="otp-field"
                    key={index}
                    value={data}
                    onChange={(e) => handleChangeOtp(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </form>
            <button className="verify-btn" onClick={verifyOtp}>
              Verify
            </button>
            <p className="phone-p2">
              By continuing you agree to the Terms and acknowledge the Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Phone;

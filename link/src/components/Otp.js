import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useAuthContext} from '../context/AuthContext'

function Otp() {
  let [otp, setOtp] = useState(new Array(6).fill(""));
  let {confirmedOtp} = useAuthContext()
  const navigate = useNavigate()

  function handleChange(element, index) {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  }

  function verifyOtp(e){
    e.preventDefault()
    if(otp=== '' || otp === null ) return;
    try{
      confirmedOtp.confirm(otp)
      console.log(otp)
      navigate('/address')
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <>
      <div className="signup-page ">
        <div className="phone">
          <div className="flex , space-between">
            <Link to="/email">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </Link>
            <p>Help</p>
          </div>
          <div className="flex center column">
            <h4 className="h4">We sent you a text</h4>
            <p className="email-p">
              Enter the 6-digit code sent to your phone number +91 ••••• •••71:
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
                    onChange={(e)=> handleChange(e.target , index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </form>
            <p>
              By continuing you agree to the Terms and acknowledge the Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;

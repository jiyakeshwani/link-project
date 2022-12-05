import React, { useState } from "react";
import { Link } from "react-router-dom";

function Email() {
  let [email, setEmail] = useState("");
  const [validation, setValidation] = useState(false);

  const onChangeHandler = (e) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    setEmail(e.target.value);
    if (regex.test(e.target.value)) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <>
    <section className="signup-page">
     
      <div className="container flex space-between">
        <svg
          class="LinkLogo"
          viewBox="0 0 52 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.32711 2.08111C7.32711 0.930578 8.27753 0 9.45259 0C10.6276 0 11.5781 0.930578 11.5781 2.08111C11.5781 3.23164 10.6276 4.16222 9.45259 4.16222C8.27753 4.16222 7.32711 3.23164 7.32711 2.08111ZM0 0.218434H3.80167V22.7553H0V0.218434ZM51.4297 6.68172C49.2352 11.2669 46.7813 14.6001 46.7813 14.6001L52 22.7384H47.5071L44.293 17.7133C41.0788 21.3172 37.882 23.0768 34.8061 23.0768C31.0563 23.0768 29.5183 20.4543 29.5183 17.4764C29.5183 17.1436 29.523 16.7337 29.5274 16.3383V16.3381L29.5274 16.3378C29.5316 15.9695 29.5356 15.6138 29.5356 15.3445C29.5356 11.4023 29.1209 10.2856 27.7557 10.4717C25.1464 10.827 21.1892 16.6304 18.6145 22.7553H15.0374V6.68172H18.8391V14.6847C21.0164 11.1147 23.0037 8.03528 26.2005 6.85091C28.0495 6.15721 29.622 6.46176 30.4342 6.81707C33.3891 8.08604 33.3718 11.1992 33.3373 15.3615C33.32 15.9198 33.32 16.512 33.32 17.138C33.32 18.6608 33.752 19.3207 34.8061 19.4222C35.8256 19.5237 36.6033 19.033 36.6033 19.033V0.218434H40.4049V16.3597C40.4049 16.3597 43.7055 13.4157 47.1961 6.68172H51.4297ZM11.351 6.6833H7.54938V22.7569H11.351V6.6833Z"
            fill="currentColor"
          ></path>
          <title>Link</title>
        </svg>
      </div>
      <div className="flex center column">
        <div className="flex center column">
          <h4 className="h4">Welcome to Link</h4>
          <p className="email-p">Log in or sign up to get started </p>
          <input
            className="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChangeHandler}
            name="email"
          />
        </div>
        {validation ? (
         
            <Link className="signup-btn" to="/phonenum">Sign up</Link>
          
        ) : null}
        <div className="flex center column end">
          <h4 className="help">Help</h4>
          <p className="email-foot">Terms • Privacy • Cookie settings</p>
        </div>
      </div>
       
    </section>
    </>
  );
}

export default Email;

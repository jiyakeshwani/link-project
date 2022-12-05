import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import { Link } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

function Card() {
  const [check, setCheck] = useState(true);
  const {
    fullname,
    address1,
    address2,
    city,
    zip,
    country,
    states,
    handleCountry,
    handleState,
    handleAddress1,
    handleAddress2,
    handleCity,
    handleZip,
    handleName,
  } = useAuthContext();
  let name = localStorage.getItem("fullname");
  let address = localStorage.getItem("address1");
  let secondAddress = localStorage.getItem("address2");
  let region = localStorage.getItem("city");
  let zipCode = localStorage.getItem("zip");
  let location = localStorage.getItem("states");
  let coun = localStorage.getItem("country");
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();
  function handleCheck() {
    setCheck(!check);
  }

  function addAddress(e) {
    e.preventDefault();
    if (fullname === "" || city === "" || zip === "") {
      return;
    } else {
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("country", country);
      localStorage.setItem("address1", address1);
      localStorage.setItem("address2", address2);
      localStorage.setItem("city", city);
      localStorage.setItem("zip", zip);
      localStorage.setItem("states", states);
    }
  }

  return (
    <>
      {" "}
      <div className="signup-page">
        <div className="phone">
          <Link to="/address">
            <span class="material-symbols-outlined material-symbols-outlined1">
              arrow_back_ios
            </span>
          </Link>
          <div className="flex center column">
            <h4 className="h5">Add a payment method</h4>

            <div className="flex center column">
              <div className="flex card-num-box">
                <div>
                  <p className="num">Card Number</p>
                  <svg
                    className="card-type"
                    {...getCardImageProps({ images })}
                  />
                </div>
                <input className="card-num" {...getCardNumberProps()} />
              </div>

              <small></small>
              <div className="flex">
                <input className="date-cvv" {...getExpiryDateProps()} />

                <input className="date-cvv" {...getCVCProps()} />
              </div>
              <div className="flex left">
                <input
                  type="checkbox"
                  value={check}
                  onChange={(e) => handleCheck(e)}
                  name="check"
                  className="checkbox"
                />
                <span>Billing address is same as shipping address</span>
              </div>

              {!check ? (
                <div className="left2">
                  <p>{name}</p>
                  <p>
                    {address} {secondAddress}
                  </p>
                  <p>
                    {region} {zipCode}
                  </p>
                  <p>
                    {location} {coun}
                  </p>
                </div>
              ) : (
                <form className="address-form" onSubmit={addAddress}>
                  <input
                    className="input1"
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    value={fullname}
                    onChange={handleName}
                  />
                  <CountryDropdown
                    classes="state"
                    value={country}
                    name="country"
                    onChange={(val) => {
                      handleCountry(val);
                    }}
                  />
                  <input
                    className="input1"
                    type="text"
                    placeholder="Address line 1"
                    value={address1}
                    name="address1"
                    onChange={handleAddress1}
                  />
                  <input
                    className="input1"
                    type="text"
                    placeholder="Address line 2"
                    value={address2}
                    name="address2"
                    onChange={handleAddress2}
                  />
                  <div className="flex">
                    <input
                      className="input2"
                      type="text"
                      placeholder="City"
                      value={city}
                      name="city"
                      onChange={handleCity}
                    />
                    <input
                      className="input2"
                      type="num"
                      placeholder="ZIP"
                      value={zip}
                      name="zip"
                      onChange={handleZip}
                    />
                  </div>
                  <RegionDropdown
                    classes="states"
                    country={country}
                    name="states"
                    value={states}
                    onChange={(val) => handleState(val)}
                  />
                  <button onClick={addAddress} className="address-btn bottom">
                    Add Address
                  </button>
                </form>
              )}
              <Link to="/success">
                <button className="signup-btn">Add card</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

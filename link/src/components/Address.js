import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

function Address() {
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
      <div className="signup-page">
        <div className="phone flex center column">
          <h4 className="address-head">Add a shipping address</h4>
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
            <Link to="/card">
              <button
                onClick={(e) => addAddress(e)}
                className="address-btn"
                type="submit"
              >
                Add Address
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Address;

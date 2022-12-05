import { createContext, useContext, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
console.log(RecaptchaVerifier);

const authContext = createContext();

export function AuthContextProvider({ children }) {
  let [number, setNumber] = useState("");
  let [validation, setValidation] = useState(false);
  let [confirmedOtp, setConfirmedOtp] = useState("");
  let navigate = useNavigate();
  function handleChange(value) {
    setNumber(value);
    if (value.length === 13) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }


  function setUpRecaptcha(num) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
    console.log("hello");
    recaptchaVerifier.render();

    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    // return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
  return (
    <authContext.Provider
      value={{ number, validation, handleChange, setUpRecaptcha }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}

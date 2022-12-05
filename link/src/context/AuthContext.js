import { createContext, useContext, useState, useNavigate } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
console.log(RecaptchaVerifier);

const authContext = createContext();

export function AuthContextProvider({ children }) {
  let [number, setNumber] = useState("");
  let [validation, setValidation] = useState(false);
  //   const [state, setState] = useState({
  //     fullname: "",

  //     address1: "",
  //     address2: '',
  //     city: "",
  //     zip: "",

  //   });
  const [fullname, setFullName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const [country, setCountry] = useState("");
  const [states, setStates] = useState("");

  function handleChangeNum(value) {
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

  function handleCountry(val) {
    setCountry(val);
  }

  function handleState(val) {
    setStates(val);
  }
  function handleName(e) {
    setFullName(e.target.value);
  }
  function handleCity(e) {
    setCity(e.target.value);
  }
  function handleZip(e) {
    setZip(e.target.value);
  }
  function handleAddress1(e) {
    setAddress1(e.target.value);
  }
  function handleAddress2(e) {
    setAddress2(e.target.value);
  }

  return (
    <authContext.Provider
      value={{
        number,
        validation,
        setUpRecaptcha,
        handleChangeNum,
        fullname,
        address1,
        address2,
        city,
        zip,
        states,
        country,
        handleCountry,
        handleState,
        handleAddress1,
        handleAddress2,
        handleCity,
        handleZip,
        handleName,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(authContext);
}

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage";
import Email from "./Email";
import Phone from "./Phone";
import Otp from "./Otp";
import Name from "./Name";
import { AuthContextProvider } from "../context/AuthContext";
import Address from "./Address";
function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState(null);
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" exact element={<HomePage />} />

          <Route path="/email" element={<Email />} />
          <Route path="/phonenum" element={<Phone />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/name" element={<Name />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

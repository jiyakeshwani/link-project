import React, { useState } from "react";
import { Link } from "react-router-dom";

function Name() {
    let [name , setName] = useState('')
    let [validation , setValidation] = useState(false)

    function handleChange(e){
    setName(e.target.value)
    if(name){
        setValidation(true)
    }else{
        setValidation(false)
    }
    }

  return (
    <>
    <div className="signup-page flex center column">
        <h4 className="h4">Enter your full name</h4>
        <p className="email-p">For account security, please use your full legal name.</p>
        <input className="email" type='text' name="name" value={name} placeholder='Full Name' onChange={handleChange}/>
        <Link to='/address' className="signup-btn"><button disabled={!validation}>Next</button></Link>
    </div>
    </>
  )
}

export default Name;

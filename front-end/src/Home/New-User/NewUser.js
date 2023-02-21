import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Style.css'



function App() {
  const [formData, setFormData] = useState({ name: "", pin: "", accountNumber:Math.floor(Math.random()*100000+1)
});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/submit-form", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    document.querySelector(".full_form").style.display = "none";   
    document.querySelector(".head").innerHTML = `Hello ${formData.name} your Account Number is ${formData.accountNumber}`;
    document.querySelector(".go_login").style.display = "block";
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <div className="container mt-5">
      <h1 className="head">Create Your Account</h1>
      <form className="full_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pin">Enter your pin:</label>
          <input
            type="password"
            className="form-control"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleInputChange}
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br/>
     <Link to='/'> <button type="submit" className="btn btn-primary go_login">
         Go to Login
        </button></Link>
    </div>
    </>
  );
}

export default App;

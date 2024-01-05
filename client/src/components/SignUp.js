import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/Logo.png";
import Swal from "sweetalert2";

export default function SignUp({ formdata }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
  });

//   const navigate = useNavigate();

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    setFormData({ ...formData, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emptyField = Object.keys(formData).find(
      (key) => !formData[key].trim()
    )
    if (emptyField){
      Swal.fire({
        title: "Invalid!",
        text: `Please enter a valid ${emptyField}`,
        icon:"error",
        confirmButtonText:"Okay"
      })
      return
    }

    fetch("https://e-commerce-rp0t.onrender.com/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((r) => {
        alert(`Welcome ${r.firstname}`);
        // navigate("/login", { replace: true })
      })
      .catch((error) => {
        console.error("Error:", error)
        alert("Invalid")
      })
  }

  return (
    <div className="login-dialogue">
      {/* <img className="logo" alt="logo" src={Logo} /> */}
      <div className="form-dialogue">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-item">
            <label htmlFor="firstname"> First Name:</label>
            <input
              type="text"
              id="firstname"
              value={formData.firstname}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="lastname"> Last Name:</label>
            <input
              type="text"
              id="lastname"
              value={formData.lastname}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="email"> Email Address:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="address"> Phone Number:</label>
            <input
              type="number"
              vfsed
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="login-btn" type="submit">
            Sign Up
          </button>
          <Link to={'/login'} className="signup-btn">Sign In</Link>
        </form>
      </div>
    </div>
  );
}

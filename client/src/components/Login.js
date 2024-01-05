import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/Logo.png";
import Swal from "sweetalert2";


export default function LogIn({ onLogIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  // const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!formData) return;
    setFormData({
      username: "",
      password: "",
    });
    fetch("https://e-commerce-rp0t.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((resp) => {
        onLogIn(resp);
        Swal.fire({
          title: "Success!",
          text: `Welcome  ${resp.lastname}`,
          icon: "success",
          confirmButtonText: "Okay",
        });
        // navigate("/products", { replace: true });
      });
  }

  function handleChange(e) {
    const nam = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [nam]: value });
  }

  return (
    <div className="login-dialogue">
      {/* <img className="logo" alt="logo" src={Logo} /> */}
      <div className="form-dialogue">
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form-item">
            <label className="username">Email Address:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label className="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="login-btn" type="submit">
            Sign In
          </button>
          <Link to={'/signup'} className="signup-btn">Sign Up</Link>
        </form>
      </div>
    </div>
  );
}

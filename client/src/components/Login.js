import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/Logo.png";
import Swal from "sweetalert2";


export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    setFormData({ ...formData, [id]: value });
  }


  // const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)

    if (!formData) return;

    setFormData({
      email: "",
      password: "",
    });

    // fetch("https://e-commerce-rp0t.onrender.com/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((r) => r.json())
    //   .then((res) => {
    //     // onLogIn(resp);
    //     Swal.fire({
    //       title: "Success!",
    //       text: `Welcome  ${formData.lastname}`,
    //       icon: "success",
    //       confirmButtonText: "Okay",
    //     });
    //     navigate("/", { replace: true });
    //   });

      navigate("/dashboard", { replace: true });
  }

  

  return (
    <div className="login-dialogue">
      {/* <img className="logo" alt="logo" src={Logo} /> */}
      <div className="form-dialogue">
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form-item">
            <label className="email">Email Address:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
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

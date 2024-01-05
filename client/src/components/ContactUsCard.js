import React, { useState } from 'react';
import Swal from "sweetalert2";
import "../css/ContactUs.css";

const ContactUsCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);

    fetch("https://e-commerce-rp0t.onrender.com/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((resp) => {
        // onLogIn(resp);
        Swal.fire({
          title: "Success!",
          text: `Message Sucessfuly sent!`,
          icon: "success",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div className="contact-us-container">
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsCard;

import React from "react";
import ContactUsCard from "./ContactUsCard";
import HomeSection from "./HomeSection";
import "../css/HomePage.css";

const ContactUSSection = () => {
  return (
    <div className="home-container">
      <HomeSection title="Want to know more about us? We can’t wait to hear from you!">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nis.
        </p>
        <ContactUsCard/>
      </HomeSection>
    </div>
  );
};

export default ContactUSSection;

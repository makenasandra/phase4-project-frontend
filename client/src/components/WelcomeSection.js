import React from "react";
import "../css/HomePage.css";
import HomeSection from "./HomeSection";
import image from "../assets/welcome.jpg";

const WelcomeSection = () => {
  return (
    <div className="home-container">
      <HomeSection title="Welcome to Coding for Kids!">
        <div className="content-container">
          <img
            src={image}
            alt="Welcome"
            className="welcome-image"
          />
          <p className="welcome-text">
          Lorem ipsum dodlor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </HomeSection>
    </div>
  );
};

export default WelcomeSection;

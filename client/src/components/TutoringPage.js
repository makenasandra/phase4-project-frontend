import React from "react";
import NavBar from "./NavBar"; // Assuming you have a NavBar component
import ReviewSection from "./ReviewSection";
import FindTutorSection from "./FindTutorSection";
import Footer from "./Footer";

import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavBar />
      <FindTutorSection/>
      <ReviewSection />
      <Footer/>
    </div>
  );
};

export default HomePage;

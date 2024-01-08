import React from "react";
import PortalNavBar from "./PortalNavBar";
import EditReviewsSection from "./EditReviewsSection";
import AddNewReviewSection from "./AddNewReviewSection";
import Footer from "./Footer";

import "../css/HomePage.css";

const DashboardPage = () => {
  return (
    <div className="home-container">
      <PortalNavBar />
      <EditReviewsSection/>
      <AddNewReviewSection/>
      <Footer/>
    </div>
  );
};

export default DashboardPage;

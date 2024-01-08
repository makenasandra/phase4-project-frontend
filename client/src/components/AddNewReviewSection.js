import React from "react";
import NewReviewCard from "./NewReviewCard";
import HomeSection from "./HomeSection";
import "../css/HomePage.css";


const AddNewReviewSection = () => {
  return (
    <div className="home-container">
      <HomeSection title="Add New Review">
        <NewReviewCard/>
      </HomeSection>
    </div>
  );
};

export default AddNewReviewSection;

import React from "react";
import ReviewCardSection from "./ReviewCard";
import HomeSection from "./HomeSection";
import "../css/HomePage.css";
import reviewsMany from "../reviews";

const ReviewSection = () => {

  fetch("url")
      .then((r) => r.json())
      .then((resp) => {
        // onLogIn(resp);
      });
  return (
    <div className="home-container">
      <HomeSection title="What others are saying about us!">
        
        <ReviewCardSection reviews={reviewsMany}/>
      </HomeSection>
    </div>
  );
};

export default ReviewSection;

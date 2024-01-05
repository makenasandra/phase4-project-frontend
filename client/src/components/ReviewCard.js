import React, { useRef } from "react";
import "../css/ReviewCard.css";



const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3>{review.author}</h3>
      <p>{review.comment}</p>
    </div>
  );
};  

const ReviewCardSection = ({reviews}) => {


  return (
    <div className="review-section">
      <div className="carousel" >
        <div className="review-cards">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        
      </div>
    </div>
  );
};


export default ReviewCardSection;




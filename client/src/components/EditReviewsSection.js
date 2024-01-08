import React from "react";
import EditableReviewCard from "./EditableReviewCard";
import HomeSection from "./HomeSection";
import "../css/HomePage.css";
import reviews from "../reviews";


const EditReviewsSection = () => {

    fetch("url")
        .then((r) => r.json())
        .then((resp) => {
            // onLogIn(resp);
        });
    return (
        <div className="home-container">
            <HomeSection title="Edit/Delte Your Reviews">

                <div className="review-section">
                    <div className="carousel" >
                        <div className="review-cards">
                            {reviews.map((review, index) => (
                                <EditableReviewCard key={review.id} id={review.id} content={review.comment} />
                            ))}
                        </div>

                    </div>
                </div>
            </HomeSection>
        </div>
    );
};

export default EditReviewsSection;

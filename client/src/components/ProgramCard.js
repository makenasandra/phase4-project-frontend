import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePage from "./ProgramsPage";

function ProductDetailsCard({
  review,
  program,
  usercomment = {},
  commentsDictionary,
  setCommentsDictionary,
  addCart,
}) {
  // program.imageUrl = image;

  return (
    <div className="productdetails-cards">
      <div className="productdetails-details">
        <h4 className="program-name">{program.name}</h4>

        <div className="productdetails-data">
          <div className="prod-layout">
            <img
              className="productdetails-image-1"
              src={program.imageUrl}
              alt="productdetails-image"
            />
          </div>
          <div className="productdetails-metadata">
            <p>{program.description}</p>
              <div className="learn-more">
              <button onClick={<HomePage />}> Learn More </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsCard;

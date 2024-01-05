import React, { Children } from "react";

function HomeSection(props) {
    const {title} = props;
   

  return (
      <div className="featured-products">
        <div  className="welcome-section">
        <h2>{title}</h2>
       {props.children}
        </div>
      </div>
      
  )
}

export default HomeSection;

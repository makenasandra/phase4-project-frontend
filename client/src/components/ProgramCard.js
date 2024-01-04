import React from "react";
import { Link } from "react-router-dom";
import { strToPrice } from "shared/helpers";
import {ReactComponent as AddCart} from "../assets/AddToCart.svg"
import { ReactComponent as Like} from "../assets/Not_Liked.svg"

function ProductCard({ product, addToFavorite }) {
  return (
    <div className="product-cards">
      <div className="product-image">
        <img
          src={product.imageUrl}
          alt="product-cover"
        />
        <h3>{product.name}</h3>
        <h4>{strToPrice(product.price)}</h4>
        <p>{product.category}</p>
      </div>
      <div className="view-add-btns">
        <button className="productButton">
          <Link to={`/products/${product.id}`}>View</Link>
        </button>
        <Like onClick={addToFavorite} className="iconButton"/>
        <AddCart onClick={addToFavorite} className="iconButton"/>
      </div>
    </div>
  );
}

export default ProductCard;

import React, { useEffect } from "react";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { strToPrice } from "shared/helpers";

function ratingStars(num) {
  let i = 0;

  const stars = [];

  while (i < num) {
    stars[i] = <i className="bi bi-star"></i>;

    i += 1;
  }

  return stars;
}

function ProductDetailsCard({
  review,
  products,
  usercomment = {},
  commentsDictionary,
  setCommentsDictionary,
  addCart
}) {
  const { productId } = useParams();
  
  const product = products.filter((prod) => prod.id === parseInt(productId))[0];

  const fetchProductReviews = () => {
    const favoriteProductsURL = "https://e-commerce-rp0t.onrender.com/reviews?item_id=1";

    fetch(favoriteProductsURL)
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length && product.id) {
          const productReviews = data.reduce((acc, curr) => {
            if (acc[product.id]) {
              acc[product.id] = [...acc[product.id], curr]
            } else {
              acc[product.id] = [curr]
            }
            return acc;
          }, {});
          setCommentsDictionary({
            ...commentsDictionary,
            ...productReviews,
          });
        }

      })
  }

  useEffect(() => {
    fetchProductReviews();
  }, [product.id]);

  const comments = (
    <Comments
      review={review}
      product={product}
      usercomment={usercomment}
      commentsDictionary={commentsDictionary}
      setCommentsDictionary={setCommentsDictionary}
    />
  );


  return (
    <div className="productdetails-cards">
      <div className="productdetails-details">
        <div className="productdetails-data">
          <div className="prod-layout">
            <img
              className="productdetails-image-1"
              src={product.imageUrl}
              alt="productdetails-image"
            />
            <button onClick={addCart(product)}> Add to Cart </button>
          </div>
          <div className="productdetails-metadata">
            <h3 className="product-name">
              {product.name}
            </h3>
            <h3>
              <u>Product Description</u>
            </h3>
            <p>
              {product.description}
            </p>
            <h3>
              <u>Product Category:</u>
            </h3>
            <p>{product.category}</p>
            <span>{strToPrice(product.price)}</span>
            <div className="rating-stars">
              <b>
                <u>Overall Rating:</u>
              </b>
              {ratingStars(Number(product.rating)).map((star, idx) => (
                <div key={idx}>{star}</div>
              ))}
            </div>
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailsCard;

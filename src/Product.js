import React from 'react';
import './Product.css';
import StarRatings from 'react-star-ratings';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <StarRatings
                        rating={rating}
                        starRatedColor="black"
                        starDimension="10px"
                        starSpacing="5px"
                    />
                </div>
            </div>
            
            <img src={image} alt=""/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

const ProductInfo = () => {
  const { state } = useLocation();

  const { title, thumbnail, price, rating, description, category } = state;

  const addToCart = () => {
    const newCart = { title, thumbnail, price };
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...storedCart, newCart];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Book added to cart!");
  };
  return (
    <>
      <div className="text-center pt-5 shadow w-50 m-auto bg-secondary text-white rounded">
        <div>
          <img height={100} src={thumbnail} alt=" " />
        </div>

        <div>
          <h1 className="mt-3">Name: {title}</h1>
          <h5 className="mt-3">Category: {category}</h5>
          <h2 className="mt-3">Price :&#8377; {price}</h2>
          <p className="mt-3">Description :{description}</p>
          <h3 className="mt-3">Rating:{rating}</h3>
        </div>
        <button className="btn btn-warning m-3" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductInfo;

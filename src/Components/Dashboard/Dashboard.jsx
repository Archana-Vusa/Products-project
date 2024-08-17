import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const API = "https://dummyjson.com";

  const [products, setProducts] = useState([]);

  const [searchedProducts, setSearchedProducts] = useState([]);

  const searchHandler = (event) => {
    setSearchedProducts(
      products.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    const getProducts = async () => {
      try {
        const productsData = await axios.get(`${API}/products`, {
          headers: { authorization: `Bearer ${token?.token}` },
        });

        if (productsData.data) {
          setProducts(productsData.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);
  const allProducts = searchedProducts.length ? searchedProducts : products;

  const productsItems = allProducts.map((product, index) => {
    return (
      <div
        key={index}
        className="border border-secondary rounded w-25 text-center m-1"
      >
        <img height={150} src={product.thumbnail} alt="image" />
        <h4>title : {product.title}</h4>
        <h4>Price : &#8377;{product.price}</h4>

        <Link
          className="btn btn-primary m-1"
          to={{ pathname: `/Product/${product.id}` }}
          state={product}
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className="w-50 m-auto">
        <input
          onChange={searchHandler}
          type="text"
          placeholder="Search your product...."
          className="form-control mt-2"
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {productsItems}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("cart")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <h2 className="text-center text-white">Your Cart</h2>
      <div className="text-center pt-5 cart border border-dark  w-50 m-auto bg-primary text-dark">
        {favorites.length === 0 ? (
          <h5 className="text info">Your Cart is empty</h5>
        ) : (
          favorites.map((product, index) => (
            <div>
              <div
                key={index}
                className="d-flex justify-content-around align-items-center gap-5 border border-1 m-1 p-2"
              >
                <div>
                  {" "}
                  <img src={product.thumbnail} alt="Cover" height={100} />
                </div>
                <div>
                  {" "}
                  <p>{product.title}</p>
                </div>
                <div>
                  {" "}
                  <p>Price: &#8377;{product.price}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;

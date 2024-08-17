import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FcBriefcase } from "react-icons/fc";

import { UserProvider } from "../AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { isAuthenticated, logout } = useContext(UserProvider);

  const navigate = useNavigate();

  const userLogoutHandler = async () => {
    const data = await logout();
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="d-flex  justify-content-around align-items-center bg-dark text-white p-3">
      <div className="d-flex align-items-center">
        <FcBriefcase size={50} />
        <h1>
          {" "}
          <Link className="text-decoration-none text-white" to="/">
            Mart
          </Link>{" "}
        </h1>
      </div>
      <ul className="d-flex">
        <li className="list-unstyled ms-3">
          {isAuthenticated ? (
            <Link
              className="text-decoration-none text-white"
              onClick={userLogoutHandler}
            >
              Logout
            </Link>
          ) : (
            <Link className="text-decoration-none text-white" to="/login">
              Login
            </Link>
          )}
        </li>
        <li className="list-unstyled ms-3">
          <Link className="text-decoration-none text-white" to="/contact">
            Contact
          </Link>
        </li>
        <li className="list-unstyled ms-3">
          <Link className="text-decoration-none text-white" to="/cart">
            Add Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { UserProvider } from "./Components/AuthProvider";

const Header = lazy(() => import("./Components/Header/Header"));
const Home = lazy(() => import("./Components/Home/Home"));
const Login = lazy(() => import("./Components/Login/Login"));
const Signup = lazy(() => import("./Components/Signup/Signup"));
const Contact = lazy(() => import("./Components/Contact us/Contact"));
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const ProductInfo = lazy(() => import("./Components/ProductInfo/ProductInfo"));
const Cart = lazy(() => import("./Components/Cart/Cart"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading the component....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Page Not found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

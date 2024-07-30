import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "./../utils";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState("");
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:5000/products";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      handleError(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1 style={{ color: "white" }}>Welcome, {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <div style={{ color: "white" }}>
        {products &&
          products?.map((item, index) => (
            <ul key={index}>
              <span>
                {item.name} : {item.price}
              </span>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Home;

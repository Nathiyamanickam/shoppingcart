import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./Home.css";

const Home = () => {
  const { state } = CartState();
  const { products } = state;

  return (
    <div className="home">

      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>

    </div>
  );
};

export default Home;
import React from "react";
import { CartState } from "../context/Context";
import "./Product.css";

const SingleProduct = ({ prod }) => {

  const { state, dispatch } = CartState();
  const { cart } = state;

  return (
    <div className="product">

      <img src={prod.image} alt={prod.name} />

      <div className="productInfo">

       
<span>{prod.name}</span>
<span>$ {prod.price}</span>
<span>Stock: {prod.inStock}</span>
<span>Delivery: {prod.fastDelivery ? "Fast" : "3 Days"}</span>
<span>Rating: {prod.ratings} ⭐</span>
        {cart.some((p) => p.id === prod.id) ? (
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              })
            }
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
          >
            Add to Cart
          </button>
        )}

      </div>

    </div>
  );
};

export default SingleProduct;
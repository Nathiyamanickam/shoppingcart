import React from "react";
import { CartState } from "../context/Context";

const Cart = () => {

  const { state:{cart}, dispatch } = CartState();

  const total = cart.reduce(
    (acc, curr) => acc + Number(curr.price),
    0
  );

  return (
    <div className="cartContainer">

      <div className="cartItems">
        {cart.map((prod) => (
          <div className="cartItem" key={prod.id}>

            <img src={prod.image} alt={prod.name} />

            <div className="cartItemDetail">
              <span>{prod.name}</span>
              <span>$ {prod.price}</span>

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

            </div>
          </div>
        ))}
      </div>

      <div className="cartSummary">

        <h2>Subtotal ({cart.length}) items</h2>

        <h3>Total: $ {total.toFixed(2)}</h3>

        <button className="checkoutBtn">
          Checkout
        </button>

      </div>

    </div>
  );
};

export default Cart;
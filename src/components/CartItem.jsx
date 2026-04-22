import React from "react";

function CartItem({ items }) {

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>

      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button>+</button>
          <button>-</button>

          <p>Total: ${item.price * item.quantity}</p>
          <button>Remove</button>
        </div>
      ))}

      <h2>Total Cart Amount: ${totalAmount}</h2>
    </div>
  );
}

export default CartItem;

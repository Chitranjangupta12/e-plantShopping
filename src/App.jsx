import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";   // ✅ added

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      {!showProductList ? (
        <>
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </>
      ) : (
        <>
          <ProductList />
          <Cart />   {/* ✅ VERY IMPORTANT */}
        </>
      )}
    </div>
  );
}

export default App;

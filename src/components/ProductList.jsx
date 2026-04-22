import React from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 4, name: "Rose", price: 25, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Tulip", price: 18, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Cactus", price: 12, category: "Succulent", img: "https://via.placeholder.com/100" }
];

function ProductList() {
  return (
    <div>
      <h1>Products</h1>

      {["Indoor", "Outdoor", "Succulent"].map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>
          {plants
            .filter((p) => p.category === cat)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.img} alt="" />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

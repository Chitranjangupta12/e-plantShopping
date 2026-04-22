import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const plants = {
    Indoor: [
      { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
      { id: 4, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/100" },
      { id: 5, name: "Fern", price: 18, image: "https://via.placeholder.com/100" },
      { id: 6, name: "ZZ Plant", price: 25, image: "https://via.placeholder.com/100" }
    ],
    Outdoor: [
      { id: 7, name: "Rose", price: 12, image: "https://via.placeholder.com/100" },
      { id: 8, name: "Tulip", price: 18, image: "https://via.placeholder.com/100" },
      { id: 9, name: "Sunflower", price: 25, image: "https://via.placeholder.com/100" },
      { id: 10, name: "Daisy", price: 14, image: "https://via.placeholder.com/100" },
      { id: 11, name: "Lily", price: 22, image: "https://via.placeholder.com/100" },
      { id: 12, name: "Marigold", price: 10, image: "https://via.placeholder.com/100" }
    ],
    Succulents: [
      { id: 13, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
      { id: 14, name: "Jade Plant", price: 20, image: "https://via.placeholder.com/100" },
      { id: 15, name: "Aloe", price: 15, image: "https://via.placeholder.com/100" },
      { id: 16, name: "Agave", price: 18, image: "https://via.placeholder.com/100" },
      { id: 17, name: "Echeveria", price: 12, image: "https://via.placeholder.com/100" },
      { id: 18, name: "Sedum", price: 10, image: "https://via.placeholder.com/100" }
    ]
  };

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems({ ...addedItems, [plant.id]: true });
  };

  return (
    <div>
      <h1>Plants</h1>

      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map((plant) => (
            <div key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>

              <button
                onClick={() => handleAdd(plant)}
                disabled={addedItems[plant.id]}
              >
                {addedItems[plant.id] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;

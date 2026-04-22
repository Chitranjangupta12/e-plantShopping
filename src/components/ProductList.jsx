import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
    { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },
    { id: 4, name: "Rose", price: 12, category: "Outdoor" },
    { id: 5, name: "Tulip", price: 18, category: "Outdoor" },
    { id: 6, name: "Sunflower", price: 25, category: "Outdoor" }
  ];

  return (
    <div>
      <h1>Plants</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>

          <button onClick={() => dispatch(addItem(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

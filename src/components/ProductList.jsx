import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const dispatch = useDispatch();

<button onClick={() => dispatch(addItem(product))}>
  Add to Cart
</button>

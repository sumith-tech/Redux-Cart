import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/CartSlice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const opencartHandler = () => {
    dispatch(cartAction.showcartHandler());
  };
  return (
    <button onClick={opencartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

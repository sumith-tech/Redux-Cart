import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/CartSlice";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cartfunction.items);
  let totalQuantity = 0;
  for (let i = 0; i < cartitem.length; i++) {
    totalQuantity += +cartitem[i].quantity;
  }
  const opencartHandler = () => {
    dispatch(cartAction.showcartHandler());
  };

  return (
    <button onClick={opencartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/CartSlice";
import { useSelector } from "react-redux";
import { cartfunctionAction } from "../../Store/cartFunctionSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cartfunction.items);
  let totalQuantity = 0;
  for (let i = 0; i < cartitem.length; i++) {
    totalQuantity += +cartitem[i].quantity;
  }
  const opencartHandler = async () => {
    dispatch(cartAction.showcartHandler());

    try {
      const response = await fetch(
        "https://redux-reactjs-a46ab-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      const data = await response.json();
      dispatch(
        cartAction.notificationHandler({
          title: "Cart Opened",
          message: "Cart Data get's succesfully",
          status: "success",
        })
      );
      console.log(data.cartitem);
      dispatch(cartfunctionAction.fetchCart(data.cartitem));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <button onClick={opencartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

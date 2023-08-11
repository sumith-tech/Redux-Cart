import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartfunctionAction } from "../../Store/cartFunctionSlice";
const CartItem = (props) => {
  const { name, quantity, totalprice, price } = props.item;
  const dispatch = useDispatch();
  const addtocartHandler = () => {
    dispatch(cartfunctionAction.addtoCart(props.item));
  };
  const deletefromCartHandler = () => {
    dispatch(cartfunctionAction.removefromCart(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalprice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={deletefromCartHandler}>-</button>
          <button onClick={addtocartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

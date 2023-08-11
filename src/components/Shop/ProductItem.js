import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartfunctionAction } from "../../Store/cartFunctionSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { name, price, description } = props;

  const addtocarthandler = () => {
    dispatch(cartfunctionAction.addtoCart(props));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtocarthandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

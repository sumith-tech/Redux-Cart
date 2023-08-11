import Modal from "../Layout/modal/modal";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cartitem = useSelector((state) => state.cartfunction.items);
  return (
    <Modal>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartitem.map((item) => (
            <CartItem
              item={{
                key: item.id,
                name: item.name,
                quantity: item.quantity,
                totalprice: item.totalprice,
                price: item.price,
                id: item.id,
              }}
            />
          ))}
        </ul>
      </Card>
    </Modal>
  );
};

export default Cart;

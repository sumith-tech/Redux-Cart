import { Fragment, useEffect } from "react";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import { cartAction } from "./Store/CartSlice";
let isinitial = true;
function App() {
  const iscartopen = useSelector((state) => state.cart.showcart);
  const cartitem = useSelector((state) => state.cartfunction.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCart = async () => {
      dispatch(
        cartAction.notificationHandler({
          title: "Sending",
          message: "Sending Cart Data ",
          status: "success",
        })
      );
      try {
        const response = await axios.put(
          "https://redux-reactjs-a46ab-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          {
            cartitem,
          }
        );

        dispatch(
          cartAction.notificationHandler({
            title: "Data Sent",
            message: "Cart Data Sent succesfully",
            status: "success",
          })
        );
        console.log(response.data.cartitem);
      } catch (err) {
        dispatch(
          cartAction.notificationHandler({
            title: "Error",
            message: "Sent Data Failed!",
            status: "error",
          })
        );

        alert(err.message);
      }
    };
    if (isinitial) {
      isinitial = false;
      return;
    }
    getCart();
  }, [cartitem]);

  return (
    <Fragment>
      {!isinitial && <Notification />}
      <Layout>
        {iscartopen && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  // const items = useSelector((state) => state.cartItems.items);
  // console.log("items: ", items);

  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "ddd",
            quantity: 45,
            price: 45,
            total: 45,
          }}
        />
      </ul>
    </Card>
  );
};

export default Cart;

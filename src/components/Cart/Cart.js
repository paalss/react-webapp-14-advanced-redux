import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cartItems.items);
  // console.log("items: ", items);

  const cartItems = items.map((e) => {
    return (
      <CartItem
        key={e.title}
        item={{
          title: e.title,
          quantity: e.quantity,
          price: e.price,
          total: e.total,
        }}
      />
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;

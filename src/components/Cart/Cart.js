import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  // console.log("items: ", items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((e) => {
          return (
            <CartItem key={e.id}
              item={{
                id: e.id,
                title: e.title,
                quantity: e.quantity,
                price: e.price,
                total: e.totalPrice,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;

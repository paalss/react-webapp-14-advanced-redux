import { useDispatch } from "react-redux";
import { cartVisibilityActions } from "../../store/index";
import classes from "./CartButton.module.css";


const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartVisibility = () => {
    dispatch(cartVisibilityActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartVisibility}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

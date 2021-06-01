import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

function App() {
  //> ved å passe ned state til useSelector får den automatisk tilgang på siste state
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);
  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

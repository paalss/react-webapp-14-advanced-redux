import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  { id: "p1", price: 4, title: "first book", description: "my first book" },
  { id: "p2", price: 2, title: "second book", description: "my sec book" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((e) => (
          <ProductItem
            key={e.id}
            id={e.id}
            title={e.title}
            price={e.price}
            description={e.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;

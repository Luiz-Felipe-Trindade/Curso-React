import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h2>Products</h2>
      <p>O valor do contador é: {counter}</p>
    </div>
  );
};

export default Products;

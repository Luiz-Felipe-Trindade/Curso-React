// React
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// Hooks
import { useFetch } from "../hooks/useFetch";

// Style
import "./Products.css";

const Products = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);
  return (
    <div>
      <p className="products">ID do produto: {id}</p>
      {error && <p>Ocorreu um erro.</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div className="products-list">
          <h1>{product.name}</h1>
          <p>R$: {product.price}</p>

          {/* 8 - nested routes */}
          <Link className="Link" to={`/products/${product.id}/info`}>
            Mais informações
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;

import "./App.css";

import { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    //   const res = await fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(product),
    //   });

    //   const addedProduct = await res.json();

    //   setProducts((prevProduct) => [...prevProduct, addedProduct]);
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <div>
        <h1>Lista de Produtos</h1>
        {loading && <p>Carrengando...</p>}
        {!loading && (
          <ul>
            {items &&
              items.map((product) => (
                <li key={product.id}>
                  {product.name} - R${product.price}
                  <button
                    className="del-button"
                    onClick={() => {
                      handleRemove(product.id);
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
        )}
        <form onSubmit={handleSubmit} className="add-product">
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          {loading && (
            <input type="submit" name="submit" disabled value="Aguarde" />
          )}

          {!loading && <input type="submit" name="submit" value="criar" />}
        </form>
      </div>
    </>
  );
}

export default App;

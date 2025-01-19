import { useState, useEffect } from "react";
import { Form } from "./components/Form";
import { ProductInfo } from "./components/ProductInfo";

import "./App.css";

const LOCAL_STORAGE_KEY = "productsApp";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const handleShowFormClick = () => setIsFormShown(true);

  const addProduct = (product) => {
    setProducts([...products, product]);
    setIsFormShown(false);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      <h1>Lista produktów</h1>
      {isFormShown ? (
        <Form onAddProduct={addProduct} />
      ) : (
        <button onClick={handleShowFormClick}>Dodaj produkt</button>
      )}
      <ul>
        {products.map((product) => (
          <ProductInfo
            key={product.id}
            product={product}
            onRemove={removeProduct}
          />
        ))}
      </ul>
    </>
  );
}

export default App;

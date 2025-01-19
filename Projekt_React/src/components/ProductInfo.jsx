import { ProductLink } from "./ProductLink";

import "./ProductInfo.css";

export const ProductInfo = ({ product, onRemove }) => {
  return (
    <li>
      <h2>{product.name}</h2>
      <p>
        ID: <ProductLink id={product.id} />
      </p>
      <p>Ilość: {product.quantity}</p>
      <button onClick={() => onRemove(product.id)}>Usuń produkt</button>
    </li>
  );
};

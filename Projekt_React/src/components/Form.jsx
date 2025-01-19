import { useState } from "react";

import "./Form.css";

export const Form = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddProduct({ name, id, quantity: Number(quantity) });
        setName("");
        setId("");
        setQuantity("");
      }}
    >
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Nazwa produktu"
          required
        />
      </div>
      <div>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          name="id"
          placeholder="ID produktu"
          required
        />
      </div>
      <div>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          name="quantity"
          placeholder="Ilość"
          required
          min="1"
        />
      </div>
      <button disabled={!name || !id || !quantity}>Dodaj produkt</button>
    </form>
  );
};

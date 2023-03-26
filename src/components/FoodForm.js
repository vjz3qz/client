// FoodForm.js

import React, { useState } from 'react';

const FoodForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      name,
      unit,
      quantity,
      expirationDate,
    });

    setName('');
    setUnit('');
    setQuantity('');
    setExpirationDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label>
        Unit:
        <input
          type="text"
          value={unit}
          onChange={(event) => setUnit(event.target.value)}
        />
      </label>

      <label>
        Quantity:
        <input
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </label>

      <label>
        Expiration Date:
        <input
          type="date"
          value={expirationDate}
          onChange={(event) => setExpirationDate(event.target.value)}
        />
      </label>

      <button type="submit">Create Food Item</button>
    </form>
  );
};

export default FoodForm;




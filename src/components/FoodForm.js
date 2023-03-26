import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodForm = () => {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch the list of restaurants from the backend API
    axios.get('/api/restaurants')
      .then(response => setRestaurants(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new food object with the form data
    const newFood = {
      name: name,
      unit: unit,
      quantity: quantity,
      expirationDate: expirationDate,
      restaurant: restaurant
    };

    // Send a POST request to the backend API to create a new food
    axios.post('/api/foods', newFood)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Unit:
          <input type="text" value={unit} onChange={event => setUnit(event.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="text" value={quantity} onChange={event => setQuantity(event.target.value)} />
        </label>
        <label>
          Expiration Date:
          <input type="date" value={expirationDate} onChange={event => setExpirationDate(event.target.value)} />
        </label>
        <label>
          Restaurant:
          <select value={restaurant} onChange={event => setRestaurant(event.target.value)}>
            <option value="">Select a restaurant</option>
            {restaurants.map(r => <option key={r._id} value={r._id}>{r.name}</option>)}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FoodForm;

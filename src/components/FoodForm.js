import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const FoodForm = () => {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  // Fetch the list of restaurants on component mount
  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      unit,
      quantity,
      expirationDate,
      restaurant,
    };
    const response = await fetch('/api/foods', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setName('');
      setUnit('');
      setQuantity('');
      setExpirationDate('');
      setRestaurant('');
      alert('Food added successfully!');
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formUnit">
        <Form.Label>Unit</Form.Label>
        <Form.Control type="text" placeholder="Enter unit" value={unit} onChange={(e) => setUnit(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formExpirationDate">
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control type="date" placeholder="Enter expiration date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formRestaurant">
        <Form.Label>Restaurant</Form.Label>
        <Form.Control as="select" value={restaurant} onChange={(e) => setRestaurant(e.target.value)} required>
          <option value="">-- Select a restaurant --</option>
          {restaurants.map(restaurant => <option key={restaurant._id} value={restaurant._id}>{restaurant.name}</option>)}
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FoodForm;

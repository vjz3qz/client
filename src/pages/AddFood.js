import React from 'react';
import NewFoodForm from './newFoodForm';

const AddFood = () => {
  return (
    <div className="add-food-container">
      <h1>Add Food</h1>
      <div className="form-container">
        <NewFoodForm />
      </div>
    </div>
  );
};

export default AddFood;
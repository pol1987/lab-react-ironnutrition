import React from 'react';

function FoodBox(props) {
  const { name, calories, image, quantity } = props.propFood;

  return (
    <div>
      <hr />
      {' '}
      <strong>{name}</strong> <br /> <small>{calories}</small>{' '}
      {<img src={image} alt="food image" width="60px" />} {quantity}{' '}
      <hr />
    </div>
  );
}

export default FoodBox;

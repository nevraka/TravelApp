import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';

function Add() {
  const [hotel, setHotel] = useState({});
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/hotels', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hotel),
    }).then(() => history.push('/'));
  };
  return (
    <div>
      <Form
        buttonText="Add"
        handleSubmit={handleSubmit}
        hotel={hotel}
        setHotel={setHotel}
      />
    </div>
  );
}

export default Add;

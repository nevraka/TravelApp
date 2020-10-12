import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Formh from './Formh';

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
    }).then(() => history.push('/hotels'));
  };
  return (
    <div>
      <Formh
        buttonText="Add"
        handleSubmit={handleSubmit}
        hotel={hotel}
        setHotel={setHotel}
      />
    </div>
  );
}

export default Add;

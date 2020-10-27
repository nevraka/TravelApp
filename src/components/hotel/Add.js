import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Formh from './Formh';
import _ from 'lodash';

const validate = (hotel) => {
  if (_.get(hotel, 'name.length') > 2) {
    return true;
  }
  return false;
};

function Add() {
  const [hotel, setHotel] = useState({});
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!validate(hotel)) {
      alert('Validation failed');
      return;
    }

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

import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';
import _ from 'lodash';

const validate = (hotel) => {
  if (_.get(hotel, 'name.length') > 2) {
    return true;
  }
  return false;
};

function Add() {
  const history = useHistory();

  const handleSubmit = (hotel) => {
    if (!validate(hotel)) {
      alert('Validation failed');
      return;
    }

    fetch('http://localhost:3333/hotels', {
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
      <Form buttonText="Add" handleSubmit={handleSubmit} />
    </div>
  );
}

export default Add;

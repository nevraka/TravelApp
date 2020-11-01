import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';

function Add() {
  const history = useHistory();

  const handleSubmit = (user) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(() => history.push('/users'));
  };

  return (
    <div>
      <Form buttonText="Add" formSubmit={handleSubmit} />
    </div>
  );
}

export default Add;

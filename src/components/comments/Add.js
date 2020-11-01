import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from './Form';

function Add() {
  const history = useHistory();

  const handleSubmit = (comment) => {
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    }).then(() => history.push('/comments'));
  };

  return (
    <div>
      <Form buttonText="Add" formSubmit={handleSubmit} />
    </div>
  );
}

export default Add;

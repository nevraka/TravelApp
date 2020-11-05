import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';

function Update() {
  const { id } = useParams();
  const [initialValue, setInitialValue] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3333/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setInitialValue(result);
      });
  }, [id]);

  const handleSubmit = async (user) => {
    fetch(`http://localhost:3333/users/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(() => history.push('/users'));
  };

  return (
    <div>
      <Form
        buttonText="Update"
        formSubmit={handleSubmit}
        initialValue={initialValue}
      />
    </div>
  );
}

export default Update;

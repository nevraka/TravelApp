import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Form from './Form';

function Update() {
  const [initialValue, setInitialValue] = useState({});
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3333/hotels/${id}`, {
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

  const handleSubmit = async (hotel) => {
    fetch(`http://localhost:3333/hotels/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hotel),
    }).then(() => history.push('/hotels'));
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

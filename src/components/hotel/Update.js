import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Form from './Form';

function Update() {
  const [hotel, setHotel] = useState({});
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/hotels/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setHotel(result);
      });
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    fetch(`http://localhost:3000/hotels/${id}`, {
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
        handleSubmit={handleSubmit}
        hotel={hotel}
        setHotel={setHotel}
      />
    </div>
  );
}
export default Update;

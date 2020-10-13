import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import FormUser from './FormUser';

function UpdateUser() {
  const [user, setUser] = useState({});
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      });
  }, []);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    fetch(`http://localhost:3000/users/${id}`, {
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
      <FormUser
        buttonText="Update"
        handleSubmit={handleSubmit}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default UpdateUser;

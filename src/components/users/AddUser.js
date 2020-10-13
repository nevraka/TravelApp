import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormUser from './FormUser';

function AddUser() {
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <FormUser
        buttonText="Add"
        handleSubmit={handleSubmit}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default AddUser;

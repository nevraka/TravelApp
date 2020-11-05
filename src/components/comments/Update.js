import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import moment from 'moment';

function Update() {
  const [initialValue, setInitialValue] = useState({});
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3333/comments/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.dateCreated) {
          result.dateCreated = moment(result.dateCreated);
        }
        setInitialValue(result);
      });
  }, [id]);

  const handleSubmit = async (comment) => {
    fetch(`http://localhost:3333/comments/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    }).then(() => history.push('/comments'));
  };

  return (
    <Form
      buttonText="Update"
      formSubmit={handleSubmit}
      initialValue={initialValue}
    />
  );
}

export default Update;

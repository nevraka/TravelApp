import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import FormCom from './FormCom';

function UpdateCom() {
  const [comment, setComment] = useState({});
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setComment(result);
      });
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    }).then(() => history.push('/comments'));
  };

  return (
    <FormCom
      buttonText="Update"
      handleSubmit={handleSubmit}
      comment={comment}
      setComment={setComment}
    />
  );
}

export default UpdateCom;

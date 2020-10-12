import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormCom from './FormCom';

function AddCom() {
  const [comment, setComment] = useState({});
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <FormCom
        handleSubmit={handleSubmit}
        comment={comment}
        setComment={setComment}
      />
    </div>
  );
}

export default AddCom;

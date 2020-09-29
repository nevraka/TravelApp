import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddCom() {
  const [comments, setComments] = useState({});
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('http://localhost:3000/hotels', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comments),
    }).then(() => history.push('/comments'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hotel ID</th>
              <th>User ID</th>
              <th>Text</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => {
              // const deleteHotel = () => handleDelete(result.id);
              return (
                <tr>
                  <td>{result.id}</td>
                  <td>{result.hotelId}</td>
                  <td>{result.userId}</td>
                  <td>{result.text}</td>
                  <td>{result.dateCreated}</td>
                  <td>
                    {/* <Link to={`/hotel/update/${result.id}`}>
                    <button>Update</button>
                  </Link> */}
                  </td>
                  <td>{/* <button onClick={deleteHotel}>Delete</button> */}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddCom;

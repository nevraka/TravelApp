import React, { useState, useEffect } from 'react';

function ListCom() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    fetch('http://localhost:3000/hotels')
      .then((response) => response.json())
      .then((hotels) => {
        setResults(hotels);
      });
  };

  return (
    <div>
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
    </div>
  );
}

export default ListCom;

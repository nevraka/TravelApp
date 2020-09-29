import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function List() {
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

  const handleDelete = async (id) => {
    fetch(`http://localhost:3000/hotels/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const remaining = results.filter((h) => id !== h.id);
          setResults(remaining);
        } else {
          throw `status code: ${response.status}`;
        }
      })
      .catch((e) => {
        console.error(e);
        alert('An error accured');
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Hotel ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            const deleteHotel = () => handleDelete(result.id);
            return (
              <tr>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.city}</td>
                <td>{result.country}</td>
                <td>
                  <Link to={`/hotel/update/${result.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
                <td>
                  <button onClick={deleteHotel}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;

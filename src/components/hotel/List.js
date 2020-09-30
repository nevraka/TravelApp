import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function List() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    fetch('http://localhost:3000/hotels')
      .then((response) => response.json())
      .then((results) => {
        setHotels(results);
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
          const remaining = hotels.filter((h) => id !== h.id);
          setHotels(remaining);
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
          {hotels.map((hotel) => {
            const deleteHotel = () => handleDelete(hotel.id);
            return (
              <tr>
                <td>{hotel.id}</td>
                <td>{hotel.name}</td>
                <td>{hotel.city}</td>
                <td>{hotel.country}</td>
                <td>
                  <Link to={`/hotels/update/${hotel.id}`}>
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

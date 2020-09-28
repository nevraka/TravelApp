import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

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
    }).then(() => history.push('/'));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Hotel:
            <input
              type="text"
              value={hotel.name}
              onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              value={hotel.city}
              onChange={(e) => setHotel({ ...hotel, city: e.target.value })}
            />
          </label>
          <br />
          <label>
            Counrty:
            <input
              type="text"
              value={hotel.country}
              onChange={(e) => setHotel({ ...hotel, city: e.target.value })}
            />
          </label>
          <br />

          <input type="submit" value="Update" />
          <Link to="/">
            <button>Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Update;

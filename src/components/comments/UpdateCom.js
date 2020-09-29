import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UpdateCom() {
  const [results, setResults] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/hotels', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'id',
        hotelId: 'hotelId',
        userId: 'userId',
        text: '',
        dateCreated: Date,
      }),
    }).then((result) => {
      setResults(result);
    });
  }, []);

  return (
    <div>
      <form>
        <label>
          Hotel:
          <input
            type="text"
            value={results.id}
            onChange={(e) => setResults({ ...results, id: e.target.value })}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            value={results.hotelId}
            onChange={(e) =>
              setResults({ ...results, hotelId: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Counrty:
          <input
            type="text"
            value={results.userId}
            onChange={(e) => setResults({ ...results, userId: e.target.value })}
          />
        </label>
        <br />
        <label>
          Counrty:
          <input
            type="text"
            value={results.text}
            onChange={(e) => setResults({ ...results, text: e.target.value })}
          />
        </label>
        <br />
        <label>
          Counrty:
          <input
            type="text"
            value={results.dateCreated}
            onChange={(e) =>
              setResults({ ...results, dateCreated: e.target.value })
            }
          />
        </label>
        <br />
        <input type="submit" value="Update" />
        <Link to="/hotels">
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default UpdateCom;

import React, { useState, useEffect } from 'react';

function HotelList() {
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
            <th>Hotel ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.city}</td>
                <td>{result.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HotelList;

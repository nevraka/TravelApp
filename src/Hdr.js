import React from 'react';
import './hdr.css';
import { Link } from 'react-router-dom';

function Hdr() {
  return (
    <div className="container">
      <Link to="/">
        <h1 className="header1">World Wide Travel</h1>
      </Link>
      <img
        className="image"
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt=""
      ></img>
      <nav>
        <ul className="nav">
          <li>Home</li>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Hdr;

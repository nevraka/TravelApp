import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <Link to="/hotels">
        <button>Hotel List</button>
      </Link>
      <Link to="/comments">
        <button>Comments</button>
      </Link>
    </div>
  );
}

export default MainPage;

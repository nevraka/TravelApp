import React from 'react';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
import './listheader.css';

function ListHeader({ title, searchTerm, setSearchTerm }) {
  return (
    <div className="list-header">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="snap-right">
        <div className="expanding">
          <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div>
          <Link className="link" to={(loc) => `${loc.pathname}/add`}>
            Add Comments
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListHeader;

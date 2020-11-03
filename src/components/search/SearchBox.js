import React, { useState } from 'react';

function SearchBox({ setSearchTerm }) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search comments"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
export default SearchBox;

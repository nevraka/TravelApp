import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './searchbox.css';

function SearchBox({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <Input
        className="search-input"
        placeholder="Search comments"
        value={searchTerm}
        onChange={handleChange}
        bordered={false}
        prefix={<SearchOutlined />}
        size="large"
      />
    </div>
  );
}
export default SearchBox;

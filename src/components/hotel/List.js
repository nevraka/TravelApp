import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';

function List() {
  const [hotels, setHotels] = useState([]);
  const [page, setPage] = useState(1);

  const renderCell = (text, record) => (
    <Link to={`/hotels/update/${record.id}`}>{text}</Link>
  );
  const columns = [
    {
      title: 'Hotel ID',
      dataIndex: 'id',
      render: renderCell,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: renderCell,
    },
    {
      title: 'City',
      dataIndex: 'city',
      render: renderCell,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      render: renderCell,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, { id }) => (
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      ),
    },
  ];
  useEffect(() => {
    loadData();
  }, [page]);

  const loadData = async () => {
    fetch(`http://localhost:3000/hotels?_page=${page}&_limit=5`)
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
      <Table
        pagination={false}
        columns={columns}
        dataSource={hotels}
        size="middle"
      />
      <Pagination
        defaultCurrent={1}
        page={page}
        onChange={setPage}
        pageSize={5}
        total={15}
      />
    </div>
  );
}

export default List;

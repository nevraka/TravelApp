import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Table } from 'antd';
import { Button } from 'antd';

function List() {
  const [hotels, setHotels] = useState([]);

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
      <Table columns={columns} dataSource={hotels} size="middle" />
    </div>
  );
}

export default List;

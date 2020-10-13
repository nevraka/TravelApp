import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function ListUser() {
  const [users, setUsers] = useState([]);

  const renderCell = (text, record) => (
    <Link to={`/users/update/${record.id}`}>{text}</Link>
  );
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: renderCell,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: renderCell,
    },
    {
      title: 'ID',
      dataIndex: 'id',
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
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((results) => {
        setUsers(results);
      });
  }, []);

  const handleDelete = async (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const remaining = users.filter((h) => id !== h.id);
          setUsers(remaining);
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
    <Table
      columns={columns}
      dataSource={users}
      size="middle"
      expandable={{
        expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.id}</p>,
        rowExpandable: (record) => record.name !== 'Not Expandable',
      }}
    />
  );
}

export default ListUser;

import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';

function ListUser() {
  const [users, setUsers] = useState([]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      //   render: renderCell,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      //   render: renderCell,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      //   render: renderCell,
    },
    {
      title: 'Action',
      key: 'action',
      //   render: (_, { id }) => (
      // <Button onClick={() => handleDelete(id)}>Delete</Button>
      //   ),
    },
  ];
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((results) => {
        setUsers(results);
      });
  }, []);

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

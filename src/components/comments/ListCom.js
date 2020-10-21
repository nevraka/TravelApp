import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';

function ListCom() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  const renderCell = (text, record) => (
    <Link to={`/comments/update/${record.id}`}>{text}</Link>
  );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: renderCell,
    },
    {
      title: 'Hotel ID',
      dataIndex: 'hotelId',
      render: renderCell,
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      render: renderCell,
    },
    {
      title: 'Text',
      dataIndex: 'text',
      render: renderCell,
    },
    {
      title: 'Date',
      dataIndex: 'dateCreated',
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
    fetch(`http://localhost:3000/comments?_page=${page}&_limit=5`)
      .then((response) => response.json())
      .then((results) => {
        setComments(results);
      });
  };

  const handleDelete = async (id) => {
    fetch(`http://localhost:3000/comments/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const remaining = comments.filter((c) => id !== c.id);
          setComments(remaining);
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
    <>
      <Table
        columns={columns}
        dataSource={comments}
        pagination={false}
        rowKey="id"
        size="middle"
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.text}</p>
          ),
        }}
      />
      <Pagination
        defaultCurrent={1}
        page={page}
        onChange={setPage}
        pageSize={5}
        total={15}
      />
    </>
  );
}

export default ListCom;

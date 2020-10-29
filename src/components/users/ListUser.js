import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { Modal } from 'antd';

function ListUser() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletingId, setDeletingId] = useState();
  const [totalItems, setTotalItems] = useState(0);

  const renderCell = (text, record) => (
    <Link to={`/users/update/${record.id}`}>{text}</Link>
  );

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'id',
      render: renderCell,
    },
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
      title: 'Action',
      key: 'action',
      render: (_, { id }) => (
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      ),
    },
  ];

  useEffect(() => {
    fetch(`http://localhost:3000/users?_page=${page}&_limit=5`)
      .then((response) => {
        setTotalItems(parseInt(response.headers.get('X-Total-Count')));
        return response.json();
      })
      .then((results) => {
        setUsers(results);
      });
  }, [page]);

  const deleteItem = async () => {
    fetch(`http://localhost:3000/users/${deletingId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const remaining = users.filter((h) => deletingId !== h.id);
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
  const handleDelete = async (id) => {
    setDeletingId(id);
    setModalVisible(true);
  };

  const handleOk = (e) => {
    console.log('OK clicked');
    setModalVisible(false);
    deleteItem();
  };

  const handleCancel = (e) => {
    console.log('Cancel clicked');
    setModalVisible(false);
  };

  return (
    <>
      <Table
        className="table"
        columns={columns}
        dataSource={users}
        size="middle"
        rowKey="id"
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.id}</p>
          ),
        }}
      />
      <Pagination
        defaultCurrent={1}
        page={page}
        onChange={setPage}
        pageSize={5}
        total={totalItems}
      />
      <Modal
        title="Are you sure?"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
}

export default ListUser;

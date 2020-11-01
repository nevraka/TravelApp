import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';
import { Modal } from 'antd';
import moment from 'moment';

function _List() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletingId, setDeletingId] = useState();
  const [totalItems, setTotalItems] = useState(0);

  const deleteItem = () => {
    fetch(`http://localhost:3000/comments/${deletingId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const remaining = comments.filter((c) => deletingId !== c.id);
          setComments(remaining);
        } else {
          throw new Error(`status code: ${response.status}`);
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

  const renderCell = (text, record) => (
    <Link to={`/comments/update/${record.id}`}>{text}</Link>
  );

  const renderDate = (text, record) => (
    <Link to={`/comments/update/${record.id}`}>
      {moment(text).format('DD/MM/YYYY')}
    </Link>
  );

  const columns = [
    {
      title: 'Comment ID',
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
      render: renderDate,
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
    fetch(`http://localhost:3000/comments?_page=${page}&_limit=5`)
      .then((response) => {
        setTotalItems(parseInt(response.headers.get('X-Total-Count')));
        return response.json();
      })
      .then((results) => {
        setComments(results);
      });
  }, [page]);

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

export default _List;

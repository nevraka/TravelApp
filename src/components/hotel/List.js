import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';
import { Modal } from 'antd';

function List() {
  const [hotels, setHotels] = useState([]);
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletingId, setDeletingId] = useState();
  const [totalItems, setTotalItems] = useState(0);

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
      .then((response) => {
        setTotalItems(parseInt(response.headers.get('X-Total-Count')));
        return response.json();
      })
      .then((results) => {
        setHotels(results);
      });
  };

  const deleteItem = async (id) => {
    fetch(`http://localhost:3000/hotels/${deletingId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          const remaining = hotels.filter((h) => deletingId !== h.id);
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

  const handleOk = (e) => {
    console.log('OK clicked');
    setModalVisible(false);
    deleteItem();
  };
  const handleCancel = (e) => {
    console.log('Cancel clicked');
    setModalVisible(false);
  };
  const handleDelete = async (id) => {
    setDeletingId(id);
    setModalVisible(true);
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
        total={totalItems}
      />
      <Modal
        title="Are you sure?"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default List;

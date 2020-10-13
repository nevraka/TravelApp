import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Sider, Header, Content } = Layout;

function MainPage() {
  return (
    <div>
      <Header style={{ backgroundColor: 'blue', opacity: '0.3' }} />
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null}>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to="/hotels">Hotel List</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/comments">Comments</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/users">Users</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: '24px 50px 0' }}>
          <img
            style={{ height: '200px', padding: '20px', marginLeft: '95px' }}
            src="https://technofaq.org/wp-content/uploads/2019/08/word-image.gif"
            alt=""
          ></img>
        </Content>
      </Layout>
    </div>
  );
}

export default MainPage;

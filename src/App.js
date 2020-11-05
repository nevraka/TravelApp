import React from 'react';
import ListHotel from './components/hotel/List';
import AddHotel from './components/hotel/Add';
import UpdateHotel from './components/hotel/Update';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListComment from './components/comments/List';
import AddComment from './components/comments/Add';
import UpdateComment from './components/comments/Update';
import MainPage from './MainPage';
import ListUser from '../src/components/users/List';
import AddUser from '../src/components/users/Add';
import { Button } from 'antd';
import UpdateUser from './components/users/Update';
import Hdr from './Hdr';
import { Layout, Menu } from 'antd';
import Contact from './Contact';
import Footer from './Footer';

const { Sider, Content } = Layout;

function App() {
  return (
    <>
      <Router>
        <Hdr />
        <Layout className="main-layout">
          <Sider trigger={null}>
            <Menu theme="dark" mode="inline" className="menu">
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
          <Content className="main-content">
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/users/update/:id">
                <UpdateUser />
              </Route>
              <Route path="/users/add">
                <AddUser />
              </Route>
              <Route path="/users">
                <ListUser />
                <Link to="/users/add">
                  <Button>Add User</Button>
                </Link>
              </Route>
              <Route path="/hotels/update/:id">
                <UpdateHotel />
              </Route>
              <Route path="/hotels/add">
                <AddHotel />
              </Route>
              <Route path="/hotels">
                <ListHotel />
                <Link to="/hotels/add">
                  <Button>Add Hotel</Button>
                </Link>
              </Route>
              <Route path="/comments/update/:id">
                <UpdateComment />
              </Route>
              <Route path="/comments/add">
                <AddComment />
              </Route>
              <Route path="/comments">
                <ListComment />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer />
      </Router>
    </>
  );
}

export default App;

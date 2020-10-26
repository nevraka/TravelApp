import React from 'react';
import List from './components/hotel/List';
import Add from './components/hotel/Add';
import Update from './components/hotel/Update';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListCom from './components/comments/ListCom';
import AddCom from './components/comments/AddCom';
import UpdateCom from './components/comments/UpdateCom';
import MainPage from './MainPage';
import ListUser from '../src/components/users/ListUser';
import AddUser from '../src/components/users/AddUser';
import { Button } from 'antd';
import UpdateUser from './components/users/UpdateUser';
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
        <Layout className="lay">
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
          <Content>
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
                <Update />
              </Route>
              <Route path="/hotels/add">
                <Add />
              </Route>
              <Route path="/hotels">
                <List />
                <Link to="/hotels/add">
                  <Button>Add Hotel</Button>
                </Link>
              </Route>
              <Route path="/comments/update/:id">
                <UpdateCom />
              </Route>
              <Route path="/comments/add">
                <AddCom />
              </Route>
              <Route path="/comments">
                <ListCom />
                <Link to="/comments/add">
                  <Button>Add Comments</Button>
                </Link>
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

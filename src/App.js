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

function App() {
  return (
    <Router>
      <Switch>
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
    </Router>
  );
}

export default App;

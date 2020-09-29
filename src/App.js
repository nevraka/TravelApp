import React from 'react';
import List from './components/hotel/List';
import Add from './components/hotel/Add';
import Update from './components/hotel/Update';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListCom from './components/comments/ListCom';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hotel/update/:id">
          <Update />
        </Route>
        <Route path="/hotel/add">
          <Add />
        </Route>
        <Route path="/hotels">
          <List />
          <Link to="/hotel/add">
            <span>Add Hotel</span>
          </Link>
        </Route>
        <Route path="/comments">
          <ListCom />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

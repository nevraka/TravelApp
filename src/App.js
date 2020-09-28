import React from 'react';
import List from './components/List';
import AddNew from './components/AddNew';
import Update from './components/Update';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/update/:id">
          <Update />
        </Route>
        <Route path="/new_hotel">
          <AddNew />
        </Route>
        <Route path="/">
          <List />
          <Link to="/new_hotel">
            <span>Otel Ekle</span>
          </Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

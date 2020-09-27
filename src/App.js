import React from 'react';
import HotelList from './components/HotelList';
import AddNewHotel from './components/AddNewHotel';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new_hotel">
          <AddNewHotel></AddNewHotel>
          <Link to="/">
            <span>Cancel</span>
          </Link>
        </Route>
        <Route path="/">
          <HotelList />
          <Link to="/new_hotel">
            <span>Otel Ekle</span>
          </Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

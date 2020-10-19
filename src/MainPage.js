import React from 'react';
import './main.css';

function MainPage() {
  return (
    <div className="content">
      <img
        className="img"
        src="https://images.unsplash.com/photo-1530907487668-af02f65b4afe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt=""
      ></img>
      <div className="text">
        World Wide Travel is one of the world’s largest and fastest-growing
        online travel booking platforms for accommodation, flights, and more.
        Based in Europa and part of Booking Holdings, we foster a work
        environment rich in diversity, creativity, and collaboration. We build
        and scale cutting edge technology that enables our millions of travelers
        to experience the world.
      </div>
    </div>
  );
}

export default MainPage;

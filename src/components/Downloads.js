import React from 'react';
import { Link } from 'react-router-dom';

const Downloads = () => {
  return (
    <div className="downloads-container">
      <h1>Downloads</h1>
      <ul className="downloads-list">
        <li><a href="/">Ticket Fare and Charges</a></li>
        <li><a href="/">Charges of Transporting Parcels by Trains</a></li>
        <li><a href="/">Charges of Transporting Goods by Railway Goods Wagons</a></li>
        <li><a href="/">Application to Reservation of Air Conditioned Train "HITACHI", Special Train and Compartment of a Train Form 2.2</a></li>
        <li><a href="/">Application to Photographing or Filming at Railway Premises and the Trains Form 2.8</a></li>
        <li><a href="/">Requesting Application Averment of the value of the Goods, Handed over to Transport by Train Form 2.10</a></li>
        <li><a href="/">Application to Displaying Advertisement within the Railway Network Form 2.7</a></li>
        <li><a href="/">Application to the Special Identity Card issued to Ordinary Season Ticket Holders and Zone Ticket Holders Form 2.12</a></li>
        <li><a href="/">Application to the Special Folder  with Photograph  for Concessionary Season Ticket Holders and Zone Ticket Holders Form 2.11</a></li>
        <li><a href="/">List of Railway Stations with Seat Reservation Facility Available</a></li>
        <li><a href="/">List of Charges and Stations Contact Numbers which Retiring Room Reservation Facility Available</a></li>
      </ul>
      <Link to="/" className="home-button">Return Home</Link>
    </div>
  );
};

export default Downloads;

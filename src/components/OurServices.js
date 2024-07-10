import React from 'react';
import { Link } from 'react-router-dom';

const OurServices = () => {
  return (
    <div className="our-services-container">
      <h1>Our Services</h1>
      <ul className="services-list">
        <li><a href="/">Reservation of Seats in Intercity and other Express Trains</a></li>
        <li><a href="/">Reservation of a Special Train</a></li>
        <li><a href="/">Reservation of a Compartment of a Train</a></li>
        <li><a href="/">Reservation of a Railway Holiday Resorts</a></li>
        <li><a href="/">Reservation of Retiring Rooms at Railway Stations</a></li>
        <li><a href="/">Displaying Advertisements at Railway Stations and other Railway Premises</a></li>
        <li><a href="/">Photographing or Filming at Railway Premises and the Trains</a></li>
        <li><a href="/">Obtaining Space in Railway Premises for Business Purposes</a></li>
        <li><a href="/">Transporting Goods using Railway Goods Wagons</a></li>
        <li><a href="/">Transporting Parcels by Trains</a></li>
        <li><a href="/">Issuing Railway Seasons Tickets</a></li>
        <li><a href="/">Search Train Schedule</a></li>
        <li><a href="/">Online Reservation of Train seats</a></li>
      </ul>
      <Link to="/" className="home-button">Return Home</Link>
    </div>
  );
};

export default OurServices;

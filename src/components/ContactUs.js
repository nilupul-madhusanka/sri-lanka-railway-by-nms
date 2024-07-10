import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-section">
        <div className="contact-details">
          <h2>Head Office Details</h2>
          <p><strong>Head of the Organization</strong></p>
          <p>Mr. S.S. Mudalige<br />
          General Manager of Railways</p>
          <p><strong>General Information</strong></p>
          <p>Telephones: +94 11 4 600 111<br />
          Fax Nos: +94 11 2 446490<br />
          Email: gmr@railway.gov.lk</p>
          <p>Railway Head Office Exchange Number: +94 11 4 600 111</p>
          <p>Fort Railway Station Inquiries: +94 11 2 434215</p>
          <p>Deputy Operating Superintendent: 1971 (Hotline)</p>
          <p>Assistant Transportation Superintendent (Operation): +94 11 2 692286</p>
        </div>
        <div className="station-details">
          <h2>Station Details</h2>
          <p>Main Line</p>
          <p>Matale Line</p>
          <p>Puttlam Line</p>
          <p>Nothern Line</p>
          <p>Batticoloa Line</p>
          <p>Coast Line</p>
          <p>KV Line</p>
          <p>Trincomalee Line</p>
          <p>Talaimannar Line</p>
        </div>
      </div>
      <Link to="/" className="home-button">Return Home</Link>
    </div>
  );
};

export default ContactUs;

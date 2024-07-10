import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to the official website of the Railway in Sri Lanka. Our mission is to provide safe, reliable, and efficient transportation services to our passengers and contribute to the socio-economic development of the country.
      </p>
      <p>
        The Sri Lankan railway network spans over 1,500 kilometers, connecting major cities and towns across the island. Our services include passenger transport, freight services, and special tourist trains that offer a unique travel experience.
      </p>
      <p>
        Established over a century ago, the Railway in Sri Lanka has a rich history and heritage. We are committed to modernizing our infrastructure and services to meet the growing demands of our passengers and to promote sustainable transportation solutions.
      </p>
      <p>
        Our dedicated team of professionals works tirelessly to ensure the safety and comfort of our passengers. We continuously invest in upgrading our rolling stock, enhancing station facilities, and implementing advanced technologies to improve our operations.
      </p>
      <p>
        Thank you for choosing the Railway in Sri Lanka. We look forward to serving you and making your journey with us a pleasant and memorable one.
      </p>
      <Link to="/" className="home-button">Return Home</Link>
    </div>
  );
};

export default AboutUs;

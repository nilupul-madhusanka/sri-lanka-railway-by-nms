import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../Images/logo.png';
import menuIcon from '../Images/menu-icon.png'; 
import main1 from '../Images/main1.jpg'; 
import main2 from '../Images/main2.jpg'; 
import main3 from '../Images/main3.jpg';


const HomePage = () => {
  useEffect(() => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.main-images img');
    const totalImages = images.length;

    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add('active');
    }

    const interval = setInterval(showNextImage, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>
        <div className= "header-list">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
            <li><Link to="/">Departmental Notices</Link></li>
            <li><Link to="/">Commercial Notices</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/support">Contact Us</Link></li>
          </ul>
        </div>
      </header>
      
      <main>
        <section>
          <div className="main-images">
            <img src={main1} alt="" className="active" />
            <img src={main2} alt="" />
            <img src={main3} alt="" />
            <aside className="important-links">
              <p>Important Links</p>
              <ul>
                <li><a href="/">Ministry of Transport</a></li>
                <li><a href="/">CTB Sri Lanka</a></li>
                <li><a href="/">Sri Lanka Airlines</a></li>
                <li><a href="/">Sri Lanka Police</a></li>
                <li><a href="/">Train Stations Database</a></li>
                <li><a href="/">GIC</a></li>
              </ul>
            </aside>
            <aside className="search-bar">
              <p>Find Anything Here</p>
              <form>
              <input type="text" placeholder="Search..."/>
              <button type="submit">Search</button>
              </form>
            </aside>
          </div>
          <div className="services-links">
            <a href="/">Train Schedule</a>
            <a href="/">Passenger Services</a>
            <a href="/">Reservations</a>
            <a href="/">Other Services</a>
          </div>
          <div className="container1">
            <div className="box notice-section">
              <h2>Important Notice</h2>
              <h3>REGULARIZATION OF LAND OWNED BY RAILWAY DEPARTMENT</h3>
              <p>Using the land/buildings owned by the Railway Department without a formal lease agreement is an offense punishable under the Government Land Ordinance Act. Accordingly, all railway land users and new applicants should register online and the </p>
              <p>The Ministry of Transport invites visionary investors to participate in an unprecedented opportunity to redefine the urban landscape by developing the six major railway stations mainly Slave Island, Kollupitiya, Bambalapitiya, Wallawatta, Dehiwala & Mount Lavinia through the ppp model.</p>
            </div>
            <div className="box news-feed">
              <h2>News Feed</h2>
              <ul>
                <li><a href="/">Calypso Tourist Train</a></li>
                <li><a href="/">Dunhinda Odyssey Train</a></li>
                <li><a href="/">E - Ticket & E - Warrant</a></li>
                <li><a href="/">Issuing Railway Seasons Tickets</a></li>
                <li><a href="/">Trains canceled on Northern Line from</a></li>
                <li><a href="/">Find Your Ticket Fare</a></li>
                <li><a href="/">Newly imported rolling stock -Class S14- for Sri Lanka Railway</a></li>
                <li><a href="/">Find Ticket</a></li>
                <li><a href="/">Ticket Fare</a></li>
              </ul>
            </div>
          </div>
          <div className="container2">
            <div className="box time-table">
              <h2>Railway Time Table Revision</h2>
              <p>With effect from 16.01.2024, the train schedule of Coast Railway Line has been revised as follows. Ruhunu Kumari Express Train -Train No. 8059- will start from Matara Station Matara 06.05 AM Maradana 09.13 AMGalu Kumari Express Line Train -Train No. 8057- will start from Beliatta Statio Beliatta 05.25 AM Maradana 09.46 AM</p>
              <p>With effect from 16.01.2024, the train schedule of Coast Railway Line has been revised as follows. Ruhunu Kumari Express Train -Train No. 8059- will start from Matara Station Matara 06.05 AM Maradana 09.13 AMGalu Kumari Express Line Train -Train No. 8057- will start from Beliatta Statio Beliatta 05.25 AM Maradana 09.46 AM</p>
            </div>
            <div className="box train-cancel">
              <h2>Trains canceled on Northern Line from 07/01/2024</h2>
              <p>
                From 07/01/2024, the following trains have been canceled for a 6-month period due to the modernization project of the railway lines from Maho Junction to Anuradhapura on the Northern Line.
              </p>
              <ul>
                <li>Train No. 4021 -Intercity Express- - Canceled from 07.01.2024</li>
                <li>Train No. 4022 -Intercity Express- - Canceled from 07.01.2024</li>
                <li>Train No. 4077 -Yal Devi- - Canceled from 07.01.2024</li>
              </ul>
            </div>
          </div>
          <aside className="pagination">
            <a href="/" class="active">Home</a>
            <a href="/">&laquo; Prev</a>
            <a href="/" class="active">1</a>
            <a href="/">2</a>
            <a href="/">3</a>
            <a href="/">4</a>
            <a href="/">Next &raquo;</a>
          </aside>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Railway in Sri Lanka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

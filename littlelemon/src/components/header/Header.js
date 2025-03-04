import React, { useState } from 'react';
import './header.css';
import bannerimg from '../../images/restauranfood.jpg';
import BookingForm from './BookingForm';

function Header() {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [availableTimes, setAvailableTimes] = useState([
    '18:00', '19:00', '20:00', '21:00'
  ]);
  const handleReserveClick = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setPopupMessage('Thank you for reserving a table with us!');
    setShowForm(false);
    setShowPopup(true);
  };
  const handleClosePopup = (event) => {
    setShowPopup(false);
  }
  return (
    <header className="header">
      <section className={`banner-section `}>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat, massa blandit congue bibendum, magna sapien ultricies turpis, vitae lobortis ipsum tellus et lectus. Nam luctus maximus elit, eget luctus velit iaculis a. Donec ac pharetra massa, sed iaculis sapien. Aenean nec nisi quam. Duis vitae pulvinar ante, eu semper ante. Donec fringilla ultrices ante, at rutrum purus placerat at. Maecenas eu mauris ac augue egestas tincidunt.

          </p>
          <button aria-label="On Click" onClick={handleReserveClick}>Reserve Table</button>
        </div>

        <div className='limit'>
          {showForm ? <BookingForm 
              onSubmit={handleFormSubmit} 
              availableTimes={availableTimes} 
            />: <div className="banner-img">
            <img src={bannerimg} alt="banner" />
          </div>}
        </div>



      </section>
      {showPopup && <Popup message={popupMessage} onClose={handleClosePopup} />}
    </header>
  );
}
function Popup({ message, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Reservation Confirmed</h3>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default Header;
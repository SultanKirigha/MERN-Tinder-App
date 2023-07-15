import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import AuthModal from '../components/AuthModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const authToken = false;

  return (
    <div className="overlay">
      <NavBar minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal} />
      <div className="home">
        <h1>Swipe Right</h1>
        <button
          className={`PrimaryButton ${authToken || showModal ? 'disabled' : ''}`}
          onClick={handleClick}
          disabled={showModal}
        >
          {authToken ? 'Sign out' : 'Create Account'}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Home;

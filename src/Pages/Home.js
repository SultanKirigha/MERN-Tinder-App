import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import AuthModal from '../components/AuthModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true)

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(true)
  };

  const authToken = false;

  return (
    <div className="overlay">
        <NavBar
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />      
         <div className="home">
            <h1 className="primary-title">Swipe Right®</h1>
        <button
          className={`PrimaryButton ${authToken || showModal ? 'disabled' : ''}`}
          onClick={handleClick}
          disabled={showModal}
        >
          {authToken ? 'Sign out' : 'Create Account'}
        </button>

        {showModal && <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>}
      </div>
    </div>
  );
};

export default Home;

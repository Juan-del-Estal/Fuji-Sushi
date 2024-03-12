import React, { useState, useEffect } from 'react';
import '../styles/Welcome.css';

export const Welcome = ({className}) => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowWelcome(true);
    }, 500);

    return () => clearTimeout(delay);
  }, []);


  return (
    <>
      <section className={`welcome-section ${showWelcome ? 'show' : ''} ${className}`}>
        <div className="welcome-content">
          <h2 className='title'>Welcome to Fuji Sushi</h2>
          <p>
            We are the best option when it comes to sushi. We have the most experienced sushi man on the market. Our ratings speak for themselves 🥢🍣.
          </p>
          <button>Learn More</button>
        </div>
      </section>
    </>
  );
};
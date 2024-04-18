import React, { useState, useEffect } from 'react';
import '../styles/branches.css';

export const Branches = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowWelcome(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <section className={`branch-section ${showWelcome ? 'show' : ''}`}>
        <div className="branch-content">
          <h2 className='title'>Welcome to Fuji Sushi</h2>
          <p className='branch-p'>
            We are the best option when it comes to sushi. We have the most experienced sushi man on the market. Our ratings speak for themselves 🥢🍣.
          </p>
          <button>Learn More</button>
        </div>
      </section>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import mainSucursal from '../assets/main-sucursal.mp4';
import secondSucursal from '../assets/second-sucursal.mp4';
import '../styles/branches.css';

export const Branches = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [contentVisible, setContentVisible] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowWelcome(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  const handleRightArrowClick = () => {
    if (contentVisible < 1) setContentVisible(prevValue => prevValue + 1);
  };

  const handleLeftArrowClick = () => {
    if (contentVisible === 1) setContentVisible(prevValue => prevValue - 1);
  };

  return (
    <>
      <section className={`branch-section ${showWelcome ? 'show' : ''}`}>
        {contentVisible === 0 && (
          <>
            <video className="rolls-video" autoPlay muted loop>
              <source src={mainSucursal} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="branch-content">
              <h2 className='h2-main-room'>Main Room</h2>
              <div className='div-main'>
                <p className="main-sucursal">
                  <i>Ocean Breeze Avenue, 123</i>
                  <br/>
                  Seaside Plaza
                  <br/>
                  Sushi City, CA 90210
                  <br/>
                  United States
                </p>
              </div>
            </div>
          </>
        )}
        {contentVisible === 1 && (
          <>
            <video className="nigiri-video" autoPlay muted loop>
              <source src={secondSucursal} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="branch-content">
              <h2 className='h2-second-room'>Second Room</h2>
              <div className='div-second'>
                <p className="second-sucursal">
                  <i>Sakura Street, 456</i>
                  <br/>
                  Wasabi Tower
                  <br/>
                  Sushi City, CA 90211
                  <br/>
                  United States
                </p>
              </div>
            </div>
          </>
        )}
        <div className="arrow-container">
          <div className="arrow arrow-left" onClick={handleLeftArrowClick}></div>
          <div className="arrow arrow-right" onClick={handleRightArrowClick}></div>
        </div>
      </section>
    </>
  );
};

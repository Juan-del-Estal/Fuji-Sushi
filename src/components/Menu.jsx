import React, { useState, useEffect } from 'react';
import '../styles/menu.css';
import sashimiVideo from '../assets/Sashimis.mp4';
import nigiriVideo from '../assets/Nigiri.mp4';
import rollsVideo from '../assets/rolls.mp4';
import saladVideo from '../assets/salad.mp4'

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [contentVisible, setContentVisible] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowMenu(true);
    }, 100);
  
    return () => {
      clearTimeout(delay);
    };
  }, []);

  const handleRightArrowClick = () => {
    if (contentVisible < 3) setContentVisible((prevValue) => prevValue + 1);
  };
  
  const handleLeftArrowClick = () => {
    if (contentVisible >= 1) setContentVisible((prevValue) => prevValue - 1);
  };
  
  return (
    <>
      <section className={`menu-section ${showMenu ? 'show' : ''}`}>
        {contentVisible === 0 && (
          <>
            <video className="rolls-video" autoPlay muted loop>
              <source src={rollsVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="menu-content">
              <h2>Premium rolls</h2>
              <p className='rolls-p'><i>Embark on a flavor-filled journey with our sushi rolls where every bite is a culinary masterpiece. From classic favorites to inventive creations, each roll offers a perfect fusion of taste and artistry. Join us and discover sushi bliss in every bite</i></p>
            </div>
          </>
        )}
        {contentVisible === 1 && (
          <>
            <video className="nigiri-video" autoPlay muted loop>
              <source src={nigiriVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="menu-content">
              <h2>Nigiris Level God</h2>
              <p className='nigiri-p'>
                Savor the simplicity and elegance of our nigiri sushi. Each bite is a perfect harmony of premium sushi rice and the freshest seafood, expertly crafted by our talented chefs. Experience the essence of Japanese culinary tradition with every exquisite piece.
              </p>
            </div>
          </>
        )}
        {contentVisible === 2 && (
          <>
            <video className="sashimi-video" autoPlay muted loop>
              <source src={sashimiVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="menu-content">
              <h2>Shashimi's master class</h2>
              <p className="sashimi-p"><i>Each slice is a testament to the chef's skill, showcasing the freshest catches of the day. Adorned with vibrant garnishes such as thinly shredded daikon radish, vibrant orange slices of pickled ginger, and emerald green wasabi, the plate is a feast for the eyes as well as the palate.</i></p>
            </div>
          </>
        )}
         {contentVisible === 3 && (
          <>
            <video className="sashimi-video" autoPlay muted loop>
              <source src={saladVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="menu-content">
              <h2 style={{ color: 'whitesmoke' }}>Sushi Salad</h2>
              <p className="salad-p">Experience culinary harmony with our sushi salad. Fresh sashimi-grade fish, crisp vegetables, and delicate seaweed, all tossed in a savory dressing. A symphony of flavors and textures in every bite, crafted to delight your palate</p>
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

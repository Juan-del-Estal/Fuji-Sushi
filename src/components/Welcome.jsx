import React, { useState, useEffect } from 'react';
import '../styles/Welcome.css';

export const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowWelcome(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <section className={`welcome-section ${showWelcome ? 'show' : ''}`}>
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

/*
import React from 'react';
import { useState, useEffect } from 'react';
import { Welcome } from './Welcome.jsx';
import { Menu } from './Menu.jsx';
import { Contact } from './Contact.jsx';
import { Branches } from './Branches.jsx';
import '../styles/Home.css';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Simula un retraso para mostrar la transición
    const delay = setTimeout(() => {
      setShowWelcome(true);
    }, 500);

    return () => clearTimeout(delay); // Limpia el temporizador al desmontar el componente
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  let currentComponent;
  switch (activeTab) {
    case 'home':
      currentComponent = <Welcome className={showWelcome ? 'show' : ''} />;
      break;
    case 'menu':
      currentComponent = <Menu className={showWelcome ? 'show' : ''} />;
      break;
    case 'branches':
      currentComponent = <Branches className={showWelcome ? 'show' : ''} />;
      break;
    case 'contact':
      currentComponent = <Contact className={showWelcome ? 'show' : ''} />;
      break;
    default:
      currentComponent = null;
  }

  return (
    <div className="container">
      <nav className="nav">
        <input
          className="input"
          type="radio"
          name="tab"
          id="home"
          checked={activeTab === 'home'}
          onChange={() => handleTabChange('home')}
        />
        <input
          className="input"
          type="radio"
          name="tab"
          id="menu"
          checked={activeTab === 'menu'}
          onChange={() => handleTabChange('menu')}
        />
        <input
          className="input"
          type="radio"
          name="tab"
          id="branches"
          checked={activeTab === 'branches'}
          onChange={() => handleTabChange('branches')}
        />
        <input
          className="input"
          type="radio"
          name="tab"
          id="contact"
          checked={activeTab === 'contact'}
          onChange={() => handleTabChange('contact')}
        />
        
        <label htmlFor="home" className="lable home">
          Welcome
        </label>
        <label htmlFor="menu" className="lable menu">
          Menu
        </label>
        <label htmlFor="branches" className="lable branches">
          Branches
        </label>
        <label htmlFor="contact" className="lable contact">
          Contact
        </label>
        <div className="tab"></div>
      </nav>
      <br />
      {currentComponent}
    </div>
  );
};
// quisiera mover el "useEffect" al componente Welcome,   aqui el componente welcome = import React, { useState, useEffect } from 'react';
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
};*/ 
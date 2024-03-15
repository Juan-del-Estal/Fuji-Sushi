import React from 'react';
import { useState } from 'react';
import { Welcome } from './Welcome.jsx';
import { Menu } from './Menu.jsx';
import { Contact } from './Contact.jsx';
import { Branches } from './Branches.jsx';
import '../styles/Home.css';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  let currentComponent;
  switch (activeTab) {
    case 'home':
      currentComponent = <Welcome />;
      break;
    case 'menu':
      currentComponent = <Menu />;
      break;
    case 'branches':
      currentComponent = <Branches />;
      break;
    case 'contact':
      currentComponent = <Contact />;
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

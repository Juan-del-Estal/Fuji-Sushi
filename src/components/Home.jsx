import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Welcome } from './Welcome.jsx';
import '../styles/Home.css';

export const Home = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    // Simula un retraso para mostrar la transición
    const delay = setTimeout(() => {
      setShowWelcome(true);
    }, 500);

    return () => clearTimeout(delay); // Limpia el temporizador al desmontar el componente
  }, []);
  
  return (
    <>
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
            id="about"
            checked={activeTab === 'about'}
            onChange={() => handleTabChange('about')}
          />
          <input
            className="input"
            type="radio"
            name="tab"
            id="photos"
            checked={activeTab === 'photos'}
            onChange={() => handleTabChange('photos')}
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

          <label htmlFor="about" className="lable about">
            Menu
          </label>

          <label htmlFor="photos" className="lable photos">
            About us
          </label>

          <label htmlFor="contact" className="lable contact">
            Contact
          </label>
          <div className="tab"></div>
        </nav>
        <br />
        <Welcome className={showWelcome ? 'show' : ''} />
      </div>
    </>
  )
}
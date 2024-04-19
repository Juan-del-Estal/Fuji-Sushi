import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contact.css';

export const Contact = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const welcomeDelay = setTimeout(() => {
      setShowWelcome(true);
    }, 100);

    const textDelay = setTimeout(() => {
      setShowText(true);
    }, 300)

    return () => clearTimeout(welcomeDelay, textDelay);
  }, []);

  return (
    <>
      <section className={`contact-section ${showWelcome ? 'show' : ''}`}>
        <div className={`contact-content ${showText ? 'show' : ''}` }>
          <form>
            <div className="form-group">
              <label className='label-form' htmlFor="exampleInputEmail1">Email address</label>
              <input className='form-control input-contact' type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label className='label-form' htmlFor="exampleInputPassword1">Subject</label>
              <input className='form-control input-contact' type="password" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-text-area"></label>
              <textarea id="contact-text-area" cols="50" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

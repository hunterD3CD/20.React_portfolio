// //////////////////////////////////////////////////import react and other source ///////////////////////////////////////////////
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// ////////////////////////////////////////////////////////////////ContactForm component /////////////////////////////////////////
function ContactForm() {
    // create a controlled component that can do client-side validation.
    // to sync the form data of the user input with the component's state "useState hook"
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');

    // deconstruct formState object into properties
  const { name, email, message } = formState;

    // ------------------------------------------------------SYNC: using the setFormState function to update the formState value for the name property
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

    // ------------------------------------SYNC: this function will sync thee internal state of the component formState with the user input from the DOM
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

//   ------------------------------------------------------JSX: a language that can represent HTML in JavaScript-------------------------------------------
  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          {/* -------------------------------------------------------------------------------------SYNC: sync the default state with the user inputs */}
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

// ////////////////////////////////////////////////////Export ContactForm component  ////////////////////////////////////////////////////
export default ContactForm;

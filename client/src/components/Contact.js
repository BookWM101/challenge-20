import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission using fetch
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Convert form data to JSON for sending to backend
      });

      if (response.ok) {
        setIsSubmitted(true); // Set submission success state
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        throw new Error('Error sending message'); // Handle server errors
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default Contact;



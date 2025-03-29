import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [status, setStatus]       = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      if (res.ok) {
        setStatus('Success! Thank you for subscribing.');
        setFirstName('');
        setLastName('');
        setEmail('');
      } else {
        setStatus('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "#b2afad" }}>
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-8 shadow-2xl max-w-md w-full">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Newsletter</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
          Sign up for our newsletter to receive the latest tips, advice, and updates on career development.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Subscribe
          </button>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </div>
    </main>
  );
};

export default Newsletter;

import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Newsletter</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Sign up for our newsletter to receive the latest tips, advice, and updates on career development.
      </p>
      <form className="max-w-md mx-auto">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </main>
  );
};

export default Newsletter;

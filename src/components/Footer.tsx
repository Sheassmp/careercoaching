import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Career Coaching. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

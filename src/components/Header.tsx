import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font text-gray-600">Bridgepoint</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

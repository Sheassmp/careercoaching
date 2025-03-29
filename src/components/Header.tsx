import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="absolute bg-white shadow-md">
        <div className="container mx-auto px-6 pb-4">
          <h1 className="text-2xl font text-gray-600 py-2">Bridgepoint</h1>
        </div>
      </div>
    </>
  );
};

export default Header;

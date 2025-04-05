import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="absolute top-0 left-0 w-full h-64 bg-cover bg-center bg-no-repeat" style={{ backgroundColor: '#cca984' }}/>
    </>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

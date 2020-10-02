import React from "react";

const Header = () => {
  return (
    <div className='header'>
      <ul className='navbar'>
        <li className='navElement'>
          <a className='link' href="/">Home</a>
        </li>
        <li className='navElement'>
          <a className='link' href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
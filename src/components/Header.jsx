import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <ul className='navBar'>
                <li className='navElement'><a href="/" className='link'>Home</a></li>
                <li className='navElement'><a href="/about" className='link'>About</a></li>
            </ul>
        </div>
    )
}

export default Header;
import { useState, useRef } from 'react';
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        {/* links-container class is important for it to work */}
        <div className='links-container'>
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

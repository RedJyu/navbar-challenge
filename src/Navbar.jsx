import { useState, useRef } from 'react';
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';

function Navbar() {
  const toggle = () => {
    setShowLinks(!showLinks);
  };

  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggle}>
            <FaBars />
          </button>
        </div>
        {/* links-container class and div is important for it to work */}

        <div
          className={
            showLinks ? 'links-container show-container' : 'links-container'
          }
        >
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

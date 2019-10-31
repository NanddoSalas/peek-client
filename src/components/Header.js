import React from 'react';
import './styles/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <FontAwesomeIcon className="Header__logo--icon" icon={faStickyNote} />
        <span>Peek</span>
      </div>
    </div>
  );
}

export default Header;
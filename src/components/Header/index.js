import React from 'react';

import { Head, Logo, TextLogo } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Head>
      <Logo>
        <FontAwesomeIcon icon={faStickyNote} />
        <TextLogo>Peek</TextLogo>
      </Logo>
    </Head>
  );
}

export { Header };

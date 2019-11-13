import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { useQuery } from '@apollo/react-hooks';
import { useLogout } from '../hooks';
import { USERNAME } from '../graphql/querys';

import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { AccountCircle } from '@material-ui/icons';

import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = styled.div`
  font-size: 32px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const TextLogo = styled.span`
  margin-left: 10px;
`;

function Appbar() {
  const { loading, data } = useQuery(USERNAME);
  const logout = useLogout();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = event => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar>

        <Logo>
          <FontAwesomeIcon icon={faStickyNote} />
          <TextLogo>Peek</TextLogo>
        </Logo>

        <Typography
          variant="h6"
          style={{ marginLeft: 'auto' }}
        >
          {!loading && data ? (
            data.me.username
          ) : null}
        </Typography>

        <IconButton
          color="inherit"
          onClick={handleOpenMenu}
        >
          <AccountCircle />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar >
  );
}

export { Appbar };

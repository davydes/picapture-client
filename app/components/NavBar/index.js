/**
*
* NavBar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

import Logo from './Logo';
import messages from './messages';

function NavBar() {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Logo />
        <Navbar.Brand>
          <Link to={'/'}>
            <FormattedMessage {...messages.header} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Photo Stream</NavItem>
          <NavItem eventKey={2} href="#">Articles</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="User" id="user-nav-dropdown">
            <MenuItem eventKey={1.1}>Uploads</MenuItem>
            <MenuItem eventKey={1.2}>Articles</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.1}>Profile</MenuItem>
            <MenuItem eventKey={1.2}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavBar.propTypes = {

};

export default NavBar;

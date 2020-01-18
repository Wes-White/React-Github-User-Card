import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container">
      <Navbar light expand="md">
        <NavbarBrand href="/">GitHub User Cards</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/" target="_blank">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <input
            className="search"
            placeholder="Search User"
            type="text"
            value={props.value}
            onChange={props.changer}
          />
          <Button color="primary" onClick={props.button}>
            Search
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

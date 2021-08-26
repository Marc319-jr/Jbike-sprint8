import image from '../assets/images/newLogo.png'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="md">
        <NavbarBrand className = "logo" href="/">
        <img className="w-100" src={image} alt="ICH"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className = "usuario">
                Marcelo Sznek
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Mi perfil
                </DropdownItem>
                <DropdownItem>
                  configuraciones
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Cerrar 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
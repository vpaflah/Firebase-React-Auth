import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext"

function Header() {
  const { currentUser } = useAuth();
  return (
    <Navbar color="danger" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Login App
        </Link>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/" className="text-white">
            Home
          </NavLink>
        </NavItem>
        {currentUser ? (
          <>
          <NavItem>
            <NavLink
            tag={Link} to="/dashboard"
              className="text-white"
            >
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                // context.setUser(null);
              }}
              className="text-white"
            >
              Logout
            </NavLink>
          </NavItem>
          </>
        ) : (
          <NavItem>
            <NavLink tag={Link} to="/signin" className="text-white">
              Sign In
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
}

export default Header;

import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './NavBar.css';

function NavBar() {
	const [ collapsed, setCollapsed ] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar light>
				<NavbarBrand href="/" className="me-auto">
					yodlr
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="me-2" />
				<Collapse isOpen={!collapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/admin">Admin</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/">Register</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavBar;

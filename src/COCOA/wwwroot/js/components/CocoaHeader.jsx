﻿var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var Image = ReactBootstrap.Image;

class CocoaHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <a href='/home' className='logo-link'>
                    <Image src='/../images/logo.png' className='header-logo' />
                    </a>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href='/home'>Home</NavItem>
                    <NavItem eventKey={2} href='/home'>Tasks</NavItem>
                    <NavDropdown eventKey={3} title="Courses" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>TDT4140</MenuItem>
                        <MenuItem eventKey={3.2}>TDT4145</MenuItem>
                        <MenuItem eventKey={3.3}>TDT4170</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3} href='/course/register'>Create new course</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href='/course/materialsearch'>Document search</NavItem>
                    </Nav>
                    <Nav pullRight>
                    {!this.props.signedIn && (<NavItem eventKey={1} href='/user/signin'>Log in</NavItem>)}
                    {!this.props.signedIn && (<NavItem eventKey={2} href='/user/register'>Create new user</NavItem>)}
                    {this.props.signedIn && (<NavItem eventKey={3} href='/user/signout'>Log out</NavItem>)}
                    {this.props.signedIn && (<a href='/user' className='logo-link'>
                            <Image src='/../images/userIcon.png' className='header-logo' />
                        </a>)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
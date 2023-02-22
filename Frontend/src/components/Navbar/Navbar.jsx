import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Navbar.Brand>
          <Link to='/' className='nav-link'>
            Task Control
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"/>

          <Nav>
            <Link to='/' className='nav-link'>
              Home
            </Link>

            <Link to='/new' className='nav-link'>
              New Task  
            </Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar
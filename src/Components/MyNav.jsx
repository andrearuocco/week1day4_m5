import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MyNav() {
    return (

        <Navbar expand="lg" className="mb-3 bg-black bg-gradient">
        <Container>
          <Navbar.Brand href="#" className="text-underline-none pe-3 text-white-50">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="text-underline-none pe-3 text-white">Home</Nav.Link>
              <Nav.Link href="#" className="text-underline-none pe-3 text-white">About</Nav.Link>
              <Nav.Link href="#" className="text-underline-none pe-3 text-white">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

export default MyNav
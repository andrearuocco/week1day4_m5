import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, InputGroup } from 'react-bootstrap';
import './MyNav.css'

function MyNav({handleSearch}) {
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
              <Nav.Item>            
                
                <InputGroup className="mb-3 w-40">
                  <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder='ricerca i libri che preferisci'
                    onChange={handleSearch}
                  />
                </InputGroup>

              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

export default MyNav
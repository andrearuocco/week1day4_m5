import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, InputGroup, Button } from 'react-bootstrap';
import './MyNav.css'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';
import { Link } from 'react-router-dom';

function MyNav({ handleSearch }) {
    const {theme, toggleTheme} = useContext (ThemeContext)

    return (

      <Navbar expand="lg" className={theme === "light" ? "mt-1 bo-gr mb-3 text-black" : "mb-3 bg-black bg-gradient text-white"}>
        <Container className='align-items-baseline'>
          <Navbar.Brand href="#" className={theme === "dark" ? "text-underline-none pe-3 text-white-50" : "text-underline-none pe-3 text-black-50"}>ReactJS-M5</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             
              <Nav.Item class='me-4 mb-2 mb-lg-0'><Button variant="success" onClick={() => { toggleTheme() }}>Set Theme</Button></Nav.Item>
              <Nav.Item as={Link} to='/' className="text-underline-none pe-3 mb-2 mb-lg-0">Home</Nav.Item>
              <Nav.Item className="text-underline-none pe-3 mb-2 mb-lg-0">About</Nav.Item>
              <Nav.Item className="text-underline-none pe-3 mb-2 mb-lg-0">Browse</Nav.Item>
              <Nav.Item className="mb-2 mb-lg-0">
                
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
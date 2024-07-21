import Row  from 'react-bootstrap/Row';
import { Container, Col } from 'react-bootstrap';
import Welcome from '../Welcome';
import SingleBook from '../SingleBook'
import CommentArea from '../CommentArea'; 
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider';


function AllTheBooks({ resultSearch, selected, setSelected }) {
    const {theme} = useContext (ThemeContext)
    
    // resultSearch è il risultato dei libri che verranno mostrati a video filtrati in base alla ricerca utente oppure no

    const handleSelected = (asin) => { // attraverso selected rintraccio l'asin del libro necessario per i componenti SingleBook e CommentArea 
        if (selected === asin) {
            setSelected(null)
        }
        else {
            setSelected(asin)
        }
    }

    return ( 
        <Container fluid>
            <Welcome />
            <Row>
                <Col xs={7} md={8} className={theme === 'light' ? '' : 'bg-dark bg-gradient'}>
                    <Row>{resultSearch.map(book => <SingleBook key={book.asin} book={book} selected={selected} handleSelected={handleSelected} />)}</Row>
                </Col>
                <Col xs={5} md={4} className={theme === 'light' ? '' : 'bg-dark bg-gradient'}>
                    {selected && <CommentArea asin={selected} />}
                </Col>
            </Row>
        </Container>
    );
}
  
export default AllTheBooks;
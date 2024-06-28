import Row  from 'react-bootstrap/Row';
import Book from './Book';
import books from './data/history.json'
import { Container } from 'react-bootstrap';

function AllTheBooks() {
    return (
        <Container>
        <Row>
            {books.map(book =>  <Book key={book.asin} book={book} />  )}
        </Row>
        </Container>
    );
  }
  
  export default AllTheBooks;
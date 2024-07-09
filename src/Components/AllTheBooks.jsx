import Row  from 'react-bootstrap/Row';

import { Container } from 'react-bootstrap';
import SingleBook from './SingleBook'

function AllTheBooks({resultSearch}) {


    return (
        <Container>

            <Row>
            {resultSearch.map(book => <SingleBook key={book.asin} book={book} />)}
            </Row>
        </Container>
    );
  }
  
  export default AllTheBooks;
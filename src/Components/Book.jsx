import {Card, Col} from 'react-bootstrap/';
import './Book.css'
function Book({book}) {
    return (
   
        <Col xs={12} sm={6} md={4} lg={3} className='mb-3'>
        <Card.Img variant="top" src={book.img} style={{ height: '18rem' }} className='br-10'/>
        <Card.Body>
          <Card.Title className='title'>{book.title}</Card.Title>
          <Card.Text className='bordoo'>
            {book.price}
          </Card.Text>
        </Card.Body>
      </Col>

    );
  }
  
  export default Book;
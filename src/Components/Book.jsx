import {Card, Col} from 'react-bootstrap/';
import './Book.css'
import {useState} from 'react'
import AddComment from './AddComment';
function Book({book}) {

    const [selected, setSelected] = useState(false)
    const handleSelected = () => {
      setSelected(!selected)
    }

    return (
        <Col xs={12} sm={6} md={4} lg={3} className='mb-3'>
        <Card.Img variant="top" src={book.img} style={{ height: '18rem' }} className={selected?'br-10 selected':'br-10'} onClick={handleSelected} />
        <Card.Body>
          <Card.Title className='title'>{book.title}</Card.Title>
          <Card.Text className='bordoo'>
            {book.price}
          </Card.Text>
          <AddComment />
        </Card.Body>
      </Col>
    );
  }
  
  export default Book;
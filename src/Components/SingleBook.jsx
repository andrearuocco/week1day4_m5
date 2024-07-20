import {Card, Col, Button} from 'react-bootstrap/';
import './SingleBook.css'
import {useContext, useState} from 'react'
import CommentArea from './CommentArea';
import { ThemeContext } from './ThemeContextProvider';
import { Link } from 'react-router-dom';


function SingleBook({book, selected, handleSelected}) {/* 
 const {theme} = useContext(ThemeContext) questo sotto va in AllTheBooks */
/*     const [selected, setSelected] = useState(false)
    const handleSelected = () => {
      setSelected(!selected)
    }  */
/* questo sotto va in AllTheBooks */
/*     if(theme === 'light')  */
const {theme} = useContext (ThemeContext)
    return (

        <Col xs={12} sm={6} md={4} lg={3} className="my-3" /* {theme === 'light' ? 'mb-3' : 'mb-3 bg-dark-50 text-white'} */>
        <Card.Img variant="top" data-testid='manybooks' src={book.img} style={{ height: '18rem' }} className={selected === book.asin ? 'br-10 selected':'br-10'} onClick={() => {handleSelected(book.asin)}} />
        <Card.Body className="position-relative">
          <Card.Title className={theme === 'light' ? 'title' : 'text-white title'}>{book.title}</Card.Title>
          <Card.Text className={theme === 'light' ? 'bordoo': 'bordo text-white' }>
            {book.price}
          </Card.Text>
          <Button as={Link} to={`/bookDetails/${book.asin}`} variant="primary" className="w-50 position position-absolute">DETTAGLIO LIBRO</Button>
          {/* {selected && <CommentArea asin={book.asin} />} FIRSTTASKVEN12LUG*/} 
        </Card.Body>
      </Col>
    );

/*     return (

      <Col xs={12} sm={6} md={4} lg={3} className='mb-3'>
      <Card.Img variant="top" src={book.img} style={{ height: '18rem' }} className="" onClick={handleSelected} />
      <Card.Body>
        <Card.Title className='title'>{book.title}</Card.Title>
        <Card.Text className=''>
          {book.price}
        </Card.Text>
        {/* {selected && <CommentArea asin={book.asin} />} FIRSTTASKVEN12LUG} 
      </Card.Body>
    </Col>
  ); */

  }
  
  export default SingleBook;
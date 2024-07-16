import Row  from 'react-bootstrap/Row';
import { Container, Col } from 'react-bootstrap';
import SingleBook from '../SingleBook'
import CommentArea from '../CommentArea'; 
import { useState } from 'react';

function AllTheBooks({ resultSearch }) {
    /* logica elevata in App.jsx */
    /* 
        const [search, setSearch] = useState('')
        const [resultSearch, setresultSearch] = useState(books)
        const handleSearch = (event) => {
        setSearch(event.target.value)
            const resultTemp = books.filter(book => {
                return book.title.includes(event.target.value)
            })
        setresultSearch(resultTemp)
        }
    */
    /* logica elevata in App.jsx */
    const [selected, setSelected] = useState(null)
    const handleSelected = (asin) => {
        if (selected === asin) {
            setSelected(null)
        }
        else {
            setSelected(asin)
        }
   
      } 

    return (
        <Container>
            <Row>
                <Col md={9}>
                    <Row>{resultSearch.map(book => <SingleBook key={book.asin} book={book} selected={selected} handleSelected={handleSelected} />)}</Row>
                </Col>
                <Col md={3}>
                    {selected && <CommentArea asin={selected} />}
                </Col>
            </Row>
        </Container>
    );
}
  
export default AllTheBooks;
import Row  from 'react-bootstrap/Row';
import { Container, Col } from 'react-bootstrap';
import Welcome from '../Welcome';
import SingleBook from '../SingleBook'
import CommentArea from '../CommentArea'; 
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider';


function AllTheBooks({ resultSearch, selected, setSelected }) {
    const {theme} = useContext (ThemeContext)
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

    
    const handleSelected = (asin) => {
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
                <Col md={8} className={theme === 'light' ? '' : 'bg-dark bg-gradient'}>
                    <Row>{resultSearch.map(book => <SingleBook key={book.asin} /* data-testid='manycard' */ book={book} selected={selected} handleSelected={handleSelected} />)}</Row>
                </Col>
                <Col md={4} className={theme === 'light' ? '' : 'bg-dark bg-gradient'}>
                    {selected && <CommentArea asin={selected} />}
                </Col>
            </Row>
        </Container>
    );
}
  
export default AllTheBooks;
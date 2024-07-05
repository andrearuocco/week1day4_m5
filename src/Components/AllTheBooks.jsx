import Row  from 'react-bootstrap/Row';
import Book from './Book';
import books from './data/history.json'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react'

function AllTheBooks() {
    const [search, setSearch] = useState('')
    const [resultSearch, setresultSearch] = useState(books)
    const handleSearch = (event) => {
        setSearch(event.target.value)
        const resultTemp = books.filter(book => {
            return book.title.includes(event.target.value)
        })
    setresultSearch(resultTemp)
    }

    return (
        <Container>
            <InputGroup className="mb-3">

                <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                    placeholder='ricerca i libri che preferisci'
                    onChange = {handleSearch}
                />
            </InputGroup>
            <Row>
                {resultSearch.map(book => <Book key={book.asin} book={book} />)}
            </Row>
        </Container>
    );
  }
  
  export default AllTheBooks;
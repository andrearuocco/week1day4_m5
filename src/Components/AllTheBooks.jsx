import Row  from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import SingleBook from './SingleBook'

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
    return (
        <Container>
            <Row>
                {resultSearch.map(book => <SingleBook key={book.asin} book={book} />)}
            </Row>
        </Container>
    );
}
  
export default AllTheBooks;
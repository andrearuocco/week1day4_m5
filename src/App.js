import './App.css';
import { Container, Row, Col } from 'react-bootstrap/';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/pages/AllTheBooks';
import books from './Components/data/history.json'
import { useContext, useState } from 'react'
import NotFound from './Components/pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './Components/pages/BookDetails';
import { ThemeContext, ThemeContextProvider } from './Components/ThemeContextProvider';


function App() {
  /* stato necessario per ricerca e function filter books */
  const [search, setSearch] = useState('')

/*   const {theme} = useContext(ThemeContext)
  console.log(theme) */

  const [resultSearch, setresultSearch] = useState(books)
  const handleSearch = (event) => {
    setSearch(event.target.value)
    const resultTemp = books.filter(book => {
      return book.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
    setresultSearch(resultTemp)
  }

  /* const resultAsin = () => {
    books.map(book => {
       book.asin 
    })
  }  */
 
  /* stato necessario per ricerca e function filter books */
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Container>
          <MyNav handleSearch={handleSearch} />
        </Container>
        <Welcome />

        <Container>
          <Row>
            <Routes>

              <Route path="/" element={<AllTheBooks resultSearch={resultSearch} />} />
              <Route path="/bookDetails/:asin" element={<BookDetails />} />
              <Route path="/nonTrovato" element={<NotFound />} />

            </Routes>

          </Row>
        </Container>

        <MyFooter />

      </BrowserRouter>
    </ThemeContextProvider>
    /*    <>  { ? value={theme} ? } 
          <Container>
          <MyNav handleSearch={handleSearch}/> { filter }
          </Container>
          <Welcome />
          <Container>
            <Row>
                <Col><AllTheBooks resultSearch={resultSearch} /></Col>
                <Col><CommentArea /></Col>
            </Row>
          </Container>
          { array già filtrato da passare ad AllTheBooks.jsx come props }
          <MyFooter />
          </> */
  );
}

export default App;

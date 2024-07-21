import './App.css';
import { Container, Row } from 'react-bootstrap/';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import AllTheBooks from './Components/pages/AllTheBooks';
import history from './Components/data/history.json'
import { useState, useEffect } from 'react'
import NotFound from './Components/pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './Components/pages/BookDetails';
import { ThemeContextProvider } from './Components/ThemeContextProvider';


function App() {
  const [books, setBooks] = useState(history) // stato il genere dei libri mostrati a schermo
  const [search, setSearch] = useState('')  // stato per la ricerca della barra in MyNav
  const [selected, setSelected] = useState(null) // stato per evidenziare con bordo rosso il libro selezionato con il click

  const [resultSearch, setresultSearch] = useState([]) // stato che contiene i libri filtrati
  const handleSearch = (event) => {
    setSearch(event.target.value)
    const resultTemp = books.filter(book => {
      return book.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
    setresultSearch(resultTemp)
  }
  // ogni volta che books cambia viene settato lo stato di ricerca
  useEffect(() => {
    setresultSearch(books);
  }, [books]);
 
  return (
    <ThemeContextProvider>
      <BrowserRouter>

        <Container>
          <MyNav handleSearch={handleSearch} />
        </Container>
        

        <Container fluid>
          <Row>
            <Routes>

              <Route path="/" element={<AllTheBooks resultSearch={resultSearch} selected={selected} setSelected={setSelected} />} />
              <Route path="/bookDetails/:asin" element={<BookDetails books={books} />} />
              <Route path="/*" element={<NotFound />} />

            </Routes>
          </Row>
        </Container>

        <MyFooter setBooks={setBooks} setSelected={setSelected} /> 

      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;

import './App.css';
import { Container, Row, Col } from 'react-bootstrap/';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';

import AllTheBooks from './Components/pages/AllTheBooks';

import history from './Components/data/history.json'
/* import fantasy from './Components/data/fantasy.json'
import horror from './Components/data/horror.json'
import romance from './Components/data/romance.json'
import scifi from './Components/data/scifi.json' */


import {  useState, useEffect } from 'react'
import NotFound from './Components/pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './Components/pages/BookDetails';
import { ThemeContext, ThemeContextProvider } from './Components/ThemeContextProvider';


function App() {
  const [books, setBooks] = useState(history)
  /* stato necessario per ricerca e function filter books */
  const [search, setSearch] = useState('')


/*   const {theme} = useContext(ThemeContext)
  console.log(theme) */
 
  const [resultSearch, setresultSearch] = useState([])
  const handleSearch = (event) => {
    setSearch(event.target.value)
    const resultTemp = books.filter(book => {
      return book.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    })
    setresultSearch(resultTemp)
  }
  useEffect(() => {
    setresultSearch(books);
}, [books]);
  /* const resultAsin = () => {
    books.map(book => {
       book.asin 
    })
  }  */
/*     const [selected, setSelected] = useState(null)
    const handleSelected = (asin) => {
        if (selected === asin) {
            setSelected(null)
        }
        else {
            setSelected(asin)
        }
   
      } 
  */
  /* stato necessario per ricerca e function filter books */

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Container>
          <MyNav handleSearch={handleSearch} />
        </Container>
        

        <Container fluid>
          <Row>
            <Routes>

              <Route path="/" element={<AllTheBooks resultSearch={resultSearch} /* selected={selected} handleSelected={handleSelected} */ />} />
              <Route path="/bookDetails/:asin" element={<BookDetails />} />
              <Route path="/nonTrovato" element={<NotFound />} />

            </Routes>

          </Row>
        </Container>

         <MyFooter setBooks={setBooks} /> 

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

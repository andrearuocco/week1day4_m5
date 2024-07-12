import './App.css';
import Container from 'react-bootstrap/Container';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import books from './Components/data/history.json'
import {useState} from 'react'


function App() {
  /* stato necessario per ricerca e function filter books */
  const [search, setSearch] = useState('')
  
  const [resultSearch, setresultSearch] = useState(books)
  const handleSearch = (event) => {
      setSearch(event.target.value)
      const resultTemp = books.filter(book => {
          return book.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
      })
      setresultSearch(resultTemp)
  }
  /* stato necessario per ricerca e function filter books */
  return (
   <> {/* ? value={theme} ? */}
      <Container>
      <MyNav handleSearch={handleSearch}/> {/* filter */}
      </Container>
      <Welcome />
      <AllTheBooks resultSearch={resultSearch} /> {/* array già filtrato da passare ad AllTheBooks.jsx come props */}
      <MyFooter />
      </>
  );
}

export default App;

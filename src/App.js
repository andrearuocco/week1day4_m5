import './App.css';
import Container from 'react-bootstrap/Container';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import books from './Components/data/history.json'
import {useState} from 'react'
import { ThemeContext } from './Components/Context';

function App() {
  /* stato necessario per ricerca e function filter books */
  const [search, setSearch] = useState('')
  const [resultSearch, setresultSearch] = useState(books)
  const handleSearch = (event) => {
      setSearch(event.target.value)
      const resultTemp = books.filter(book => {
          return book.title.includes(event.target.value)
      })
      setresultSearch(resultTemp)
  }
  /* stato necessario per ricerca e function filter books */
  return (
    <ThemeContext.Provider> {/* ? value={theme} ? */}
      <Container>
      <MyNav handleSearch={handleSearch} /> {/* filter */}
      </Container>
      <Welcome />
      <AllTheBooks resultSearch={resultSearch} /> {/* array già filtrato da passare ad AllTheBooks.jsx come props */}
      <MyFooter />
    </ThemeContext.Provider>
  );
}

export default App;

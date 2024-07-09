import './App.css';
import Container from 'react-bootstrap/Container';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import books from './Components/data/history.json'
import {useState} from 'react'

function App() {
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
    <>
      <Container>
      <MyNav handleSearch={handleSearch}/>
      </Container>
      <Welcome />
      <AllTheBooks resultSearch={resultSearch}/>
      <MyFooter />
    </>
  );
}

export default App;

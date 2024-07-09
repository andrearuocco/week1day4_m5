import './App.css';
import Container from 'react-bootstrap/Container';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';

function App() {
  return (
    <>
      <Container>
      <MyNav />
      </Container>
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;

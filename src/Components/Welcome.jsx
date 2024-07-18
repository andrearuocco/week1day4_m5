import Alert from 'react-bootstrap/Alert';
import './Welcome.css'
import { ThemeContext } from './ThemeContextProvider';
import { useContext } from 'react'


function Welcome() {
  const {theme} = useContext (ThemeContext)
  return (
    <Alert className={theme === 'light' ? 'bord-gr d-flex justify-content-around red align-items-center' : 'bg-dark bg-gradient d-flex justify-content-around red align-items-center'}>
      <Alert.Heading className='alertanru'> E P I C B 0 0 K S </Alert.Heading>
      <p className='fosi'>
        Welcome !!
      </p>
    </Alert>
  );
}

export default Welcome;
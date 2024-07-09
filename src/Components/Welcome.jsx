import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert className='bg-dark bg-gradient'>
      <Alert.Heading className='text-white text-center'> EPICBooks HISTORY </Alert.Heading>
      <p className='text-white-50 text-center'>
        Welcome !!
      </p>
    </Alert>
  );
}

export default Welcome;
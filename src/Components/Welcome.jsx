import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <Alert className='bg-dark bg-gradient'>
      <Alert.Heading className='text-white'> Sei su "Only Best Books", divertiti insieme a noi. </Alert.Heading>
      <p className='text-white-50'>
        Welcome !!
      </p>
    </Alert>
  );
}

export default Welcome;
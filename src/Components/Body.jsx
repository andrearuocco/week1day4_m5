import Container from 'react-bootstrap/Container';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';

function Body() {
    return (
        <>
            <Container>
                <MyNav />
            </Container>
            <Welcome />
            <AllTheBooks />
            <MyFooter />
        </>
    )
}

export default Body
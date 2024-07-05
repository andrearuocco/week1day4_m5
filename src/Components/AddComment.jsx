import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

function AddComment() {
    return (
        <InputGroup className='mt-4 d-flex flex-column justify-content-center'>
            <Form.Control className='mb-3 w-100' type="number" min="1" max="5" />
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" />
            <Button variant="dark" className='mb-3 text-white'>Dark</Button>
        </InputGroup>
    )
}

export default AddComment
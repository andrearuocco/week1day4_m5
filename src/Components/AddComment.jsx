import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function AddComment({asin}) {
    const [formValue, setformValue] = useState({
        rate: "",
        comment: "",
        elementId: asin 
    })
    const handleChange = (ev => {
        setformValue({...formValue, [ev.target.name]:ev.target.value})
    })
    const handleSave = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MWMxNzJiNWMyMDAwMTUyNzFmYjQiLCJpYXQiOjE3MjAyNjE2NTUsImV4cCI6MTcyMTQ3MTI1NX0.g2rDStXE1X97fb20GU7x7rOAa56qGgiB-FjyUF50kdU",
                    "Content-Type": "application/json"
                },
                method: 'POST',
            body: JSON.stringify(formValue)
            })
    }
    
    return (
        <InputGroup className='mt-4 d-flex flex-column justify-content-center'>
            <Form.Control className='mb-3 w-100' type="number" min="1" max="5" name="rate" onChange={handleChange}/>
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="comment" onChange={handleChange}/>
            <Button variant="dark" className='mb-3 text-white' onClick={handleSave}>Dark</Button>
        </InputGroup>
    )
}

export default AddComment
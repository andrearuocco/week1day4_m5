import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';

function AddComment({asin, loadComments}) {
    const initialFormState = {
        rate: "",
        comment: "",
        elementId: asin 
    }
    const [formValue, setformValue] = useState(initialFormState)
    const [alert, setAlert] = useState(null)
    const handleChange = (ev => {
        setformValue({...formValue, [ev.target.name]:ev.target.value})
    })
    const handleSave = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
                {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MWMxNzJiNWMyMDAwMTUyNzFmYjQiLCJpYXQiOjE3MjAyNjE2NTUsImV4cCI6MTcyMTQ3MTI1NX0.g2rDStXE1X97fb20GU7x7rOAa56qGgiB-FjyUF50kdU",
                        "Content-Type": "application/json"
                    },
                    method: 'POST',
                body: JSON.stringify(formValue)
                }
            )
            if (response.ok) {
                loadComments()
                setformValue(initialFormState)
                //alert("Commento aggiunto")
                setAlert({message: "Commento aggiunto", success: true})
            } else { //alert("Inserisci un rate da 1 a 5")
                setAlert({message: "Inserisci un rate da 1 a 5", success: false})}
        }
        catch(error){
           //alert("Riprova più tardi.")
           setAlert({message: "Riprova più tardi.", success: false})
        }
       setTimeout(()=> {setAlert(null)}, 3000)
    }
    
    return (<> {alert && <Alert key={alert.success?"success":"danger"} variant={alert.success?"success":"danger"}>{alert.message}</Alert>} 
        <InputGroup className='mt-4 d-flex flex-column justify-content-center'>
            <Form.Control className='mb-3 w-100' type="number" min="1" max="5" name="rate" onChange={handleChange} value={formValue.rate}/>
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="comment" onChange={handleChange} value={formValue.comment}/>
            <Button variant="dark" className='mb-3 text-white' onClick={handleSave}>Dark</Button>
        </InputGroup></>
        
    )
}

export default AddComment
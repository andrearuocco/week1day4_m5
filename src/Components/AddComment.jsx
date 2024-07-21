import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Alert, Button } from 'react-bootstrap';
import { useState } from 'react';
import './AddComment.css'

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
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjliYzFmYzMxZGI2MDAwMTUwYjliZDQiLCJpYXQiOjE3MjE0ODM3NzIsImV4cCI6MTcyMjY5MzM3Mn0.xFNOKL25iw3c__Ic-n21T4Vg2BJDpM8AiI1Out_mSzg",
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
       setTimeout(()=> {setAlert(null)}, 2000)
    }
    
    return (<> {alert && <Alert key={alert.success?"success":"danger"} variant={alert.success?"success":"danger"}>{alert.message}</Alert>} 
        <InputGroup className='mt-2 d-flex flex-column justify-content-center'>
            <h3 className='text-center'>Inserisci un commento</h3>
            <Form.Control className='bora-20 mb-3 w-100' type="number" min="1" max="5" name="rate" onChange={handleChange} value={formValue.rate} placeholder='RATE'/>
            <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="comment" onChange={handleChange} value={formValue.comment} placeholder="scrivi qui il tuo commento..."/>
            <Button variant="success" className='button w-50 mb-3 text-white' onClick={handleSave}>Aggiungi il tuo commento</Button>
        </InputGroup></>
        
    )
}

export default AddComment
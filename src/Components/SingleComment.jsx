import { useEffect, useState } from 'react';
import { Button, ListGroup, Form, InputGroup, Alert, Modal } from 'react-bootstrap';
import './SingleComment.css'



function SingleComment({comment, loadComments}) {
 /*  const [show, setShow] = useState(true); */
 
  const [alert, setAlert] = useState(null)
  const [alertTwo, setAlertTwo] = useState(false)
  const deleteFinally = () => {
    setAlertTwo(true)
   }
   const closeModal = () => {
    setAlertTwo(false)
   }
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {

        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjliYzFmYzMxZGI2MDAwMTUwYjliZDQiLCJpYXQiOjE3MjE0ODM3NzIsImV4cCI6MTcyMjY5MzM3Mn0.xFNOKL25iw3c__Ic-n21T4Vg2BJDpM8AiI1Out_mSzg",
          "Content-Type": "application/json"
        },
        method: 'DELETE',
      })
      if(response.ok){
        setAlert({message: "Cancellato correttamente", success: true})
        setTimeout(()=> {loadComments()}, 2000)
      }
      else {
        setAlert({message: "Errore nella cancellazione", success: false})

      }
    }
    catch(error) {
      setAlert({message: "Riprova più tardi.", success: false})
  
    }
    setTimeout(()=> {setAlert(null)}, 4000)
};

const [isEditing, setIsEditing] = useState(false)
/* const initialFormEdit = {
  rate: comment.rate,
  comment: comment.comment,
  elementId: comment.elementId
} */
const [formValue, setformValue] = useState({})

const editForm = () => {
  setIsEditing(!isEditing)
}
useEffect(()=>{
  const initialFormValue = {
    rate: comment.rate,
    comment: comment.comment,
    elementId: comment.elementId
  }
  setformValue(initialFormValue)
},[comment])
 const handleEdit = async () => {
  if(formValue.rate > 5 || formValue.rate < 1) {
    setAlert({message: "Inserisci un rate da 1 a 5", success: false})
  return 
  }

  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjliYzFmYzMxZGI2MDAwMTUwYjliZDQiLCJpYXQiOjE3MjE0ODM3NzIsImV4cCI6MTcyMjY5MzM3Mn0.xFNOKL25iw3c__Ic-n21T4Vg2BJDpM8AiI1Out_mSzg",
        "Content-Type": "application/json"
      },
      method: 'PUT',
      body: JSON.stringify(formValue)
    })
    if(response.ok){
      setAlert({message: "Modificato correttamente", success: true})
      setTimeout(()=> {loadComments()}, 3000)
      setIsEditing(false)
      //setformValue(initialFormEdit)
    }
    else {
      setAlert({message: "Errore nella modifica", success: false})
    }
  }
  catch(error) {
    setAlert({message: "Commento Riprova più tardi", success: false})
  }
  setTimeout(()=> {setAlert(null)}, 6000)
}; 
const handleChange = (ev => {
  setformValue({...formValue, [ev.target.name]:ev.target.value})
})
    return(   <> {alert && <Alert key={alert.success?"success":"danger"} variant={alert.success?"success":"danger"} /* onClose={() => setShow(false)} dismissible */ className='mx-2'>{alert.message}</Alert>} 
      <ListGroup data-testid='comment' className='listgroup'>
        <ListGroup.Item className='d-flex justify-content-between'>
          <ListGroup.Item>{comment.author}  </ListGroup.Item>
          <ListGroup.Item>{isEditing ? <Form.Control className='mb-3 w-100' type="number" min="1" max="5" name="rate" onChange={handleChange} value={formValue.rate} /> : comment.rate}</ListGroup.Item>  
        </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-between bor-bot'>     
          <ListGroup.Item>{isEditing ? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="comment" onChange={handleChange} value={formValue.comment} /> : comment.comment}</ListGroup.Item>
          <ListGroup.Item className='d-flex'>
            <ListGroup.Item><i class="fa-solid fa-trash" onClick={deleteFinally}></i></ListGroup.Item>
            <ListGroup.Item> <i class="fa-solid fa-pen" onClick={() => { isEditing ? handleEdit() : editForm() }}></i></ListGroup.Item>
          </ListGroup.Item>
        </ListGroup.Item>
        {alertTwo &&     <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
    

        <Modal.Body>
          <h4>Sicuro di voler cancellare?</h4>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={closeModal}>CHIUDI</Button>
          <Button variant="danger" onClick={()=>{handleDelete()}}>ELIMINA</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>}
      </ListGroup></>
    )
}

export default SingleComment
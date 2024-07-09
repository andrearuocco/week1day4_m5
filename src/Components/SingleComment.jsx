import { useState } from 'react';
import { Button, ListGroup, Form, InputGroup } from 'react-bootstrap';

function SingleComment({comment, loadComments}) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {

        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MWMxNzJiNWMyMDAwMTUyNzFmYjQiLCJpYXQiOjE3MjAyNjE2NTUsImV4cCI6MTcyMTQ3MTI1NX0.g2rDStXE1X97fb20GU7x7rOAa56qGgiB-FjyUF50kdU",
          "Content-Type": "application/json"
        },
        method: 'DELETE',
      })
      if(response.ok){
        alert("Cancellato corrrettamente")
        loadComments()
      }
      else {
        alert("Errore nella cancellazione")
      }
    }
    catch(error) {
      alert("Riprova più tardi.")
    }
 
};
const [isEditing, setIsEditing] = useState(false)
const initialFormEdit = {
  rate: comment.rate,
  comment: comment.comment,
  elementId: comment.elementId
}
const [formValue, setformValue] = useState(initialFormEdit)

const editForm = () => {
  setIsEditing(!isEditing)
}
 const handleEdit = async () => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {

      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MWMxNzJiNWMyMDAwMTUyNzFmYjQiLCJpYXQiOjE3MjAyNjE2NTUsImV4cCI6MTcyMTQ3MTI1NX0.g2rDStXE1X97fb20GU7x7rOAa56qGgiB-FjyUF50kdU",
        "Content-Type": "application/json"
      },
      method: 'PUT',
      body: JSON.stringify(formValue)
    })
    if(response.ok){
      alert("Modificato corrrettamente")
      loadComments()
      setIsEditing(false)
      setformValue(initialFormEdit)
    }
    else {
      alert("Errore nella modifica")
    }
  }
  catch(error) {
    alert("Riprova più tardi.")
  }

}; 
const handleChange = (ev => {
  setformValue({...formValue, [ev.target.name]:ev.target.value})
})
    return(    
      <ListGroup>

     
        <ListGroup.Item>{comment.author}  </ListGroup.Item>
        <ListGroup.Item>{isEditing? <Form.Control className='mb-3 w-100' type="number" min="1" max="5" name="rate" onChange={handleChange} value={formValue.rate}/>:comment.rate}</ListGroup.Item>  
        <ListGroup.Item>{isEditing? <Form.Control as="textarea" className='mb-3 w-100' aria-label="With textarea" name="comment" onChange={handleChange} value={formValue.comment}/>:comment.comment}</ListGroup.Item>
        <ListGroup.Item><i class="fa-solid fa-trash" onClick={handleDelete}></i></ListGroup.Item>
        <ListGroup.Item> <i class="fa-solid fa-pen" onClick={() => {isEditing?handleEdit():editForm()}}></i></ListGroup.Item>


      </ListGroup>
    )
}

export default SingleComment
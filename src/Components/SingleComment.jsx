import ListGroup from 'react-bootstrap/ListGroup';
function SingleComment({comment}) {
    return(    <ListGroup>

        <ListGroup.Item className='d-flex'>{comment.author}     {comment.rate}</ListGroup.Item>
        <ListGroup.Item>{comment.comment}</ListGroup.Item>

      </ListGroup>)
}

export default SingleComment
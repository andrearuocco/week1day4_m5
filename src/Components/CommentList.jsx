import SingleComment from "./SingleComment"
import "./CommentList.css"
import { Spinner, Button } from "react-bootstrap";


function CommentList({comments, loadComments, loading}) {
  
    if (loading){
        return (<>
            <Button variant="danger" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{' '}
            <Button variant="danger" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </>)
    }
    /* const [isLoading, setIsLoading] = useState(false);
    if (comments.length === 0) {
        setIsLoading(true)
    } */
    /*   if (isLoading)
      return(
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
      )
 *//* <h3 className='text-center'>I vostri commenti</h3> */
    return(
        <div className="commentList">{comments.map(comment => <SingleComment key={comment._id} comment={comment} loadComments={loadComments}/>)}</div>  
    )
}

export default CommentList
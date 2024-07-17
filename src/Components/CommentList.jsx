import SingleComment from "./SingleComment"
import "./CommentList.css"

function CommentList({comments, loadComments}) {
    return(
        <div className="commentList"><h3 className='text-center'>I vostri commenti</h3>{comments.map(comment => <SingleComment key={comment._id} comment={comment} loadComments={loadComments}/>)}</div>  
    )
}

export default CommentList
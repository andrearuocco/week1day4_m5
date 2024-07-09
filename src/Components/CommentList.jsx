import SingleComment from "./SingleComment"

function CommentList({comments, loadComments}) {
    return(
        <>{comments.map(comment => <SingleComment key={comment._id} comment={comment} loadComments={loadComments}/>)}</>  
    )
}

export default CommentList
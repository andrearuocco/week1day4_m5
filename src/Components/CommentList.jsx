import SingleComment from "./SingleComment"

function CommentList({comments}) {
    return(<>{comments.map(comment => <SingleComment key={comment._id} comment={comment} />)}</>
        
    )
}

export default CommentList
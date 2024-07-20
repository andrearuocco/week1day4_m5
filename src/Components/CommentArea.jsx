import { useEffect, useState } from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"
import './CommentArea.css'

function CommentArea({asin}) {
    const [comments, setComments] = useState([])
    const loadComments = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjliYzFmYzMxZGI2MDAwMTUwYjliZDQiLCJpYXQiOjE3MjE0ODM3NzIsImV4cCI6MTcyMjY5MzM3Mn0.xFNOKL25iw3c__Ic-n21T4Vg2BJDpM8AiI1Out_mSzg"
                }
            })
        const data = await response.json()
        setComments(data)
    }
    useEffect(() => {loadComments()}, [asin])
    return (
        <div className="sticky-top p-3 bor-com-ar"> <AddComment asin={asin} loadComments={loadComments}/> <CommentList comments={comments} loadComments={loadComments}/> </div>
    )
}

export default CommentArea
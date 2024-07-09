import { useEffect, useState } from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

function CommentArea({asin}) {
    const [comments, setComments] = useState([])
    const loadComments = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MWMxNzJiNWMyMDAwMTUyNzFmYjQiLCJpYXQiOjE3MjAyNjE2NTUsImV4cCI6MTcyMTQ3MTI1NX0.g2rDStXE1X97fb20GU7x7rOAa56qGgiB-FjyUF50kdU"
                }
            })
        const data = await response.json()
        setComments(data)
    }
    useEffect(() => {loadComments()}, [])
    return (
        <div> <AddComment asin={asin} loadComments={loadComments}/> <CommentList comments={comments} loadComments={loadComments}/> </div>
    )
}

export default CommentArea
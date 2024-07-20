import { useParams } from "react-router-dom";
import CommentArea from "../CommentArea";
/* import books from '../data/history.json' */
import { useState } from "react";


function BookDetails({books}) {
    const { asin } = useParams()
    const [book, setBook] = useState(books.find(book => book.asin === asin ))
    return (
        <>

           {/*  <h1> sono il dettaglio n {asin} </h1> */}
            <small><p>{book.title}</p></small>
            <CommentArea asin={asin} />
        </>

    );
}

export default BookDetails;
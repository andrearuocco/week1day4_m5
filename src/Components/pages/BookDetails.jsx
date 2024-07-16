import { useParams } from "react-router-dom";
import CommentArea from "../CommentArea";
import books from '../data/history.json'


function BookDetails() {
    const { asin } = useParams()
    return (
        <>

            <h1> sono il dettaglio n {asin} </h1>
            {books.map(book => book.asin === {asin}.asin ? <h1>ciao</h1> : "")}
            <CommentArea asin={asin} />
        </>

    );
}

export default BookDetails;
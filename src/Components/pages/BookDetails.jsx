import { useParams } from "react-router-dom";
import CommentArea from "../CommentArea";

function BookDetails() {
    const { asin } = useParams()
    return (
        <>
            <h1> sono il dettaglio n {asin} </h1>

            <CommentArea asin={asin} />
        </>

    );
}

export default BookDetails;
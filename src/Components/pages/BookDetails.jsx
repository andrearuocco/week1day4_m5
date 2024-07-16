import { useParams } from "react-router-dom";

function BookDetails() {
    const {asin} = useParams()
    return (
        <h1> sono il dettaglio n {asin} </h1>
    );
}
  
export default BookDetails;
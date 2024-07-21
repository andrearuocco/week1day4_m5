import { useParams } from "react-router-dom";
import CommentArea from "../CommentArea";
import { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap/';
import './BookDetails.css'
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider';

function BookDetails({books}) {
    const {theme} = useContext (ThemeContext)
    const { asin } = useParams() // serve per mandare alla pagina del libro tramite il rispettivo asin
    const [book, setBook] = useState(books.find(book => book.asin === asin )) // lo stato è passato come props da App perché contiene il genere di default(history)/scelto dall'utente
    return (
    <>
        <div className="d-flex flex-column font-style-bd"><h5>Benvenuto nella pagina dettaglio</h5><p>La scelta del genere e un'eventuale ricerca in questa pagina saranno visibili nella pagina Home. Grazie</p></div>
        <Row className="pad">
            <Col sm={5} className={theme === 'light' ? 'my-2 py-2 border-rosso' : 'bg-dark bg-gradient my-2 py-2 border-rosso' }>
                <Card.Img variant="top" src={book.img} style={{ height: '27rem' }} className="mb-5 radius-bd" />
                <Card.Body >
                    <Card.Title className={theme === 'light' ? 'd-flex justify-content-between align-items-center' : 'text-white d-flex justify-content-between align-items-center'}><p>{book.title}</p> <p>{book.price}</p></Card.Title>
                    <Card.Text className={theme === 'light' ? '' : 'text-white'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam consequuntur officiis mollitia dolorum sint eligendi ratione quod maxime iusto quas eveniet, nulla unde nihil necessitatibus excepturi sit aperiam totam vero?
                    </Card.Text>
                </Card.Body>
            </Col >
            <Col sm={7} className="my-2 border-rosso-t py-2">
                <CommentArea asin={asin} />
            </Col>
        </Row>
    </>
    );
}

export default BookDetails;
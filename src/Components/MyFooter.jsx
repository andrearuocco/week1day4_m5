import './MyFooter.css'
import history from './data/history.json'
import fantasy from './data/fantasy.json'
import horror from './data/horror.json'
import romance from './data/romance.json'
import scifi from './data/scifi.json'
import { Form } from 'react-bootstrap/';
import {  useState } from 'react'

function MyFooter({setBooks}) {
    const [selectedGenre, setSelectedGenre] = useState('History')
    const handleGenreChange = (e) => {
      const genre = e.target.value
      setSelectedGenre(genre)
      switch (genre) {
          case 'History': 
              
              setBooks(history)
              break
          case 'Fantasy': 
        
              setBooks(fantasy)
              break
          case 'Horror': 
              setBooks(horror)
              break
          case 'Romance': 
              setBooks(romance)
              break
          case 'Sci-Fi': 
              setBooks(scifi)
              break
          default:
              setBooks(history)
              break
      }
  }/* <div className=" br-20 bg-dark bg-gradient bord mx-auto my-auto d-flex justify-content-center">
            <ul className="list-unstyled text-white d-flex align-items-center">
                <li><i className="fa-solid fa-reply p-3"></i></li>
                <li><i className="fa-solid fa-arrow-left p-3"></i></li>
                <li><i className="fa-solid fa-play p-3"></i></li>
                <li><i className="fa-solid fa-arrow-right p-3"></i></li>
                <li><i className="fa-solid fa-share-nodes p-3"></i></li>
            </ul>
        </div> */
    return (
     
  
        <Form.Select aria-label="Default select example" onChange={handleGenreChange}
            className='fixed-bottom'>
                  <option value="History" >History</option>
                  <option value="Fantasy" >Fantasy</option>
                  <option value="Horror" >Horror</option>
                  <option value="Romance" >Romance</option>
                  <option value="Sci-Fi" >Sci-Fi</option>
              </Form.Select>

    )
}

export default MyFooter
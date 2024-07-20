import './MyFooter.css'
import history from './data/history.json'
import fantasy from './data/fantasy.json'
import horror from './data/horror.json'
import romance from './data/romance.json'
import scifi from './data/scifi.json'
import { Form } from 'react-bootstrap/';
import {  useState } from 'react'
import { Button } from 'bootstrap'

function MyFooter({setBooks, setSelected}) {
    const [selectedGenre, setSelectedGenre] = useState('History')
    const handleGenreChange = (e) => {
      const genre = e.target.value
      setSelected(false)
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
        </div> 
            */
      
    return (
     
  
        <Form.Select aria-label="Default select example" onChange={handleGenreChange}
            className='fixed-bottom w-50 margin-25 bg-success font-si bo-sh mb-1'>
               <option value="History" className='text-danger text-center font-si'>History</option>
                  <option value="Fantasy" className='text-danger text-center font-si'>Fantasy</option>
                  <option value="Horror" className='text-danger text-center font-si' >Horror</option>
                  <option value="Romance" className='text-danger text-center font-si'>Romance</option>
                  <option value="Sci-Fi" className='text-danger text-center font-si'>Sci-Fi</option>
              </Form.Select>

    )
}

export default MyFooter
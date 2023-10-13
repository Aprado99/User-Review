import { useState } from 'react';
import people from './data'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'


const App = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text}= people[index]

  const checkNumber  = (number) =>{

    if (number >people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson =()=> {
    setIndex((oldState)=>{
      const newIndex = oldState  + 1
  
      return checkNumber(newIndex) 
    })
   }
  const prevPerson =()=> {
    setIndex((oldState)=>{
      const newIndex = oldState - 1
      if (newIndex < 0) {
        return people.length - 1;
        
      }
      return newIndex 
    })
  }
  const randonPerson =()=>{
    let randonnumber = Math.floor(Math.random() * people.length)
    console.log(randonnumber);
    if (randonnumber === index) {
      randonnumber = index + 1
    }
    setIndex(checkNumber(randonnumber))
  }



  return(
    <main>
      <article className='review'>
        <div className="img-container">
        <img src={image} alt={name}  className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
            <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
            <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
        </div>
        <button className='btn btn-hipster' onClick={randonPerson}>
          Surprise me
        </button>
      
      </article>
    </main>
  )
};
export default App;

import React, {useState, Fragment} from 'react';
import './App.css';
import Card from './components/card/Card'
import useCards from './hooks/useCards'

function App() {
  let {cards, flip} = useCards()
  const [guessed, setGuessed] = useState(0)

  const [won, setWon] = useState(false)
  
  const onClick = (e, index) => {
      let open = flip(index)
      if(open === cards.length){
        setTimeout(()=> setWon(true), 1000)
      } 
      setGuessed(open)    
  }


  return (
    <div className='container'>
       {
        !won && cards ? (
          <Fragment>
            <h1>{guessed} of 16</h1>
            <br/>
            <div className='cards-container'>
           {
               cards.map((c, index) =>
               <Card key={c.id} card={c} index={index}  onClick={onClick}/>
             
             )
           }
           </div>
          </Fragment>
         
        )
        : (
          <div className='win-label'>
            <h1 style={{color: '#f50000'}}>YOU WON THE GAME!!</h1>
          </div> 
        )
       }
       
    </div>
  );
}

export default App;

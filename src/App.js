import React, {useState} from 'react';
import './App.css';
import Card from './components/card/Card'
import useCards from './hooks/useCards'

function App() {
  let {cards, flip} = useCards()

  const [won, setWon] = useState(false)
  
  const onClick = (e, index) => {
      if(flip(index) === cards.length){
        setTimeout(()=> setWon(true), 1000)
      }     
  }


  return (
    <div className="container">
       {
        !won && cards ? cards.map((c, index) =>
          <Card key={c.id} card={c} index={index}  onClick={onClick}/>
        ) : (
          <div className='win-label'>
            <h1 style={{color: '#f50000'}}>YOU WON THE GAME!!</h1>
          </div> 
        )
       }
       
    </div>
  );
}

export default App;

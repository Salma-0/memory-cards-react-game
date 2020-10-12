import {useState} from 'react'

function shuffledCards(arr){
    console.log('Being Shuffled...')
    let ctr = arr.length;
    let temp, index;
    while (ctr > 0) {
        const randomNumber = Math.random()

        index = Math.floor(randomNumber * ctr)
        ctr--;

        temp = arr[ctr]
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr
}


function generateCards(){
    console.log('Being Generated...')
    const cards = []
    for(let i=1; i<8; i += 2){
        cards.push({id: i, image: `https://picsum.photos/seed/${i}/150/250`, open: false})
        cards.push({id: i+1, image: `https://picsum.photos/seed/${i}/150/250`, open: false})
    }

    return shuffledCards(cards)
}

export default function(){


    const [lastFlipped, setLastFlipped] = useState(-1)
    const [cards, setCards] = useState(generateCards)
    const [openCards, setOpenCards] = useState(0)
    
    function flip(curr){
        let tempCards = cards
        tempCards[curr].open = true
        let oc = openCards
        if(tempCards[curr].image === tempCards[lastFlipped]?.image){
            tempCards[lastFlipped].open = true
            setOpenCards(openCards+2)
            oc = oc+2
        }else{
            setTimeout(()=> {tempCards[curr].open = false}, 800)
        }
        setLastFlipped(curr)
        setCards(tempCards)
        return oc;
    }



   
    return { 
        cards,
        flip,
        openCards   
    }

}
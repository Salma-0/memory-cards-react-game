import React from 'react'

const Card = ({card: {image, open, id}, index, onClick}) => {

    return (
        <div className='flip-card' onClick={e => onClick(e, index)}>
            <div className="flip-card-inner" >
                {
                open ? <div className='flip-card-front'>
                    <img style={{ borderRadius: 10 }} src={image} alt="" />
                </div>
                  :
                <div className='flip-card-back'>
                    <img src="/icons/questionicon.png" alt="" />
                </div>
                }
            </div>
        </div>
    )
}
    
       
   

export default Card

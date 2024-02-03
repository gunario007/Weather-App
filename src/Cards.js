import React from 'react'

const Cards = props => {
  return (
    
       <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleCloses}>x</span>
        {props.contents}
      </div>
    </div>
   
  )
}

export default Cards

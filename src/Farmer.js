import React from 'react'

const Farmer = props => {
  return (
    
       <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClos}>x</span>
        {props.conten}
      </div>
    </div>
    
  )
}

export default Farmer

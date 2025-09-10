import React from 'react'

const Card = ({children,reverse}) => {
  return (
    <div className={`card ${reverse && "reverse"}`}>
      {children}
    </div>


    // <div className="card" style={{
    //   backgroundColor : reverse ? "black" : "white",
    //   color : reverse ? "white" : "black",
    // }}>
    //   {children}
    // </div>
  )
}

Card.defaultProps = {
  reverse : false 
}

export default Card

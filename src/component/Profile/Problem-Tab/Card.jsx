import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="text">{props.problem}</div>
    </div>
  )
}

export default Card
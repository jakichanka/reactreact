import React from 'react'

const CounterNum = ({ counter , onClick}) => {
  return (
    <div>
      <span>{ counter }</span>
      <button onClick={ onClick }>INC</button>
    </div>
  )
}

export default CounterNum

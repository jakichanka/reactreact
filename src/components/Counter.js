import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../store/actions'
import CounterNum from './CounterNum'

const Counter = ({ dispatch, counter }) => {
  
  return (
    <div>
      <CounterNum counter={counter}/>
      <button onClick={() => dispatch(increment())}>INC</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)

import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../store/actions'
import CounterNum from './CounterNum'

const Counter = ({ counter, increment }) => {
  
  return (
    <div>
      <CounterNum counter={counter} onClick={() => increment()}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)

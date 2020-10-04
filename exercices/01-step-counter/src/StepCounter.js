import React from 'react'
import { connect } from 'react-redux'
import { addStep, resetCounter } from './App'
const StepCounter = () => (
  <div>
    You walked {this.props.steps} today !!
    <p>
      <button onClick={addStep}>Add step</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </p>
  </div>
)

const mapState = (state) => ({
  steps: state.steps,
})
const mapDispatch = { addStep, resetCounter }
export default connect(mapState, mapDispatch)(StepCounter)

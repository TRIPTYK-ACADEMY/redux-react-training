import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './App'

class Counter extends Component {
  increment = () => {
    this.props.increment()
  }
  decrement = () => {
    this.props.decrement()
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button
          type="button"
          onClick={this.increment}
          className="border p-2 m-2 hover:bg-red-400"
        >
          +
        </button>
        <span>{this.props.count}</span>
        <button
          type="button"
          onClick={this.decrement}
          className="border p-2 m-2  hover:bg-red-400"
        >
          -
        </button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.count,
  }
}
const mapDispatchToProps = {
  increment,
  decrement,
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

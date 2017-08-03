import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class GreetingMessage extends Component {
  render() {
    return (
      <h2>
        Hello, {this.props.name}!
      </h2>
    )
  }
}

const propTypes = {
  name: PropTypes.string,
}

GreetingMessage.propTypes = propTypes

const mapStateToProps = state => ({
  name: state.greeting.name,
})

export default connect(mapStateToProps)(GreetingMessage)

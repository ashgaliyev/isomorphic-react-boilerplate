import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { changeName } from '../../redux/actions/greetingActions'

const propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
}

class GreetingForm extends Component {
  render() {
    return (
      <div>
        <p>Please, enter your name:</p>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.name}
        />
      </div>
    )
  }
}

GreetingForm.propTypes = propTypes

const mapStateToProps = state => ({
  name: state.greeting.name,
})

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeName(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GreetingForm)

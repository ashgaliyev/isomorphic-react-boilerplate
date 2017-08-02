import React, { PropTypes, Component } from 'react'
import './App.css'

const propTypes = {
  initialName: PropTypes.string,
}

const defaultProps = {
  initialName: 'Anonym',
}

class App extends Component {
  constructor(props) {
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.renderGreetingWidget = this.renderGreetingWidget.bind(this)

    this.state = {
      name: this.props.initialName,
    }
  }

  handleNameChange(val) {
    const name = val.target.value

    if (name.length === 0) {
      this.setState({ ...this.state, name: this.props.initialName })
    } else {
      this.setState({ ...this.state, name })
    }
  }

  renderGreetingWidget() {
    return (
      <div>
        <hr />
        <p>
          Hello, {this.state.name}!
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <div>
          <p>Enter your name:</p>
          <div>
            <input onChange={this.handleNameChange} />
          </div>
          {this.renderGreetingWidget()}
        </div>
      </div>
    )
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App

import React, { Component } from 'react';
import Button from './Button';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready!",
      secondaryMessage: "Also ready!",
      counter: 0,
      theme: "primary"
    };
  }

  render() {
    return (
      <div className="m-2">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox"
            onClick={ (e) => this.toggleCheckBox(e) }/>
            <label>This is check box</label>
        </div>
        <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
          {this.state.message}
        </div>
        <div className={`h5 bg-dark text-white text-center p-2`}>
          {this.state.secondaryMessage}
        </div>
        <div className="text-center">
          <Button theme="primary" onClick={(e, params) => this.handleOnClick(e, params) }/>
          <Button theme="danger" onClick={(e, params) => this.handleOnClick(e, params) }/>
        </div>
      </div>
    )
  }

  handleOnClick(event, parameters) {
    event.persist();
    this.setState(
        { counter: this.state.counter + 1,
          theme: parameters.newTheme,
          message: `Theme ${parameters.newTheme}`}, 
        () => {
          this.setState({ secondaryMessage: `${event.type}: ${this.state.counter}`});
        }
    );
  }

  selectTheme(params) {
    this.setState({
      theme: params.newTheme,
      message: `Theme ${params.newTheme}`
    })
  }

  toggleCheckBox(event) {
    if (this.state.counter === 0) {
      event.preventDefault();
    }
  }
}
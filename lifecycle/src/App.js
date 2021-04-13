import React, { Component } from 'react';

import Message from './Message';
import List from './List';
import ExternalCounter from './ExternalCounter';
import HooksMessage from './HooksMessage';
import DirectionDisplay from './DirectionDisplay';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counterLeft: 0,
      counterRight: 0,
      showMessage: true
    };
  }

  incrementCounter(counter) {
    if (counter === 'left') {
      this.setState({counterLeft: this.state.counterLeft + 1});
    } else {
      this.setState({counterRight: this.state.counterRight + 1});
    }
  }

  handleChange() {
    this.setState({showMessage: !this.state.showMessage});
  }

  changeCounter(val) {
    this.setState({counter: this.state.counter + val});
  }

  render() {
    console.log(`Komponent App, metoda render.`);

    return (
      <div className="container text-center">
        <div className="row p-2">
          <div className="col-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input"
              checked={this.state.showMessage}
              onChange={ () => this.handleChange() }/>
              <label className="form-check-label">Show</label>
            </div>
            {this.state.showMessage &&
            <div className="row"> 
              <div className="col-6">
                  <Message message={`Counter Left: ${this.state.counterLeft}`}
                    callback={() => { this.incrementCounter('left'); }}
                    text="Rise left counter"></Message>
                  <HooksMessage message={`Counter ${this.state.counter}`}
                    callback={ () => { this.incrementCounter(); } }
                    text="Hooks Rise counter"></HooksMessage>
              </div>
              <div className="col-6">
                <Message message={`Counter Right: ${this.state.counterRight}`}
                  callback={() => { this.incrementCounter('right'); }}
                  text="Rise right counter"></Message>
              </div>
            </div>
            }
          </div>
          <div className="col-4">
            <List></List>
          </div>
          <div className="col-4">
            <ExternalCounter></ExternalCounter>
          </div>
        </div>
        <DirectionDisplay value={this.state.counter}></DirectionDisplay>
        <div className="text-center">
            <button className="btn btn-primary m-1"
              onClick={() => {this.changeCounter(-1); }}>Reduce</button>
            <button className="btn btn-primary m-1"
              onClick={() => {this.changeCounter(1); }}>Increase</button>
        </div>
      </div>
    )
  }
}

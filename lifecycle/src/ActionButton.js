import React, { Component } from 'react';

export default class ActionButton extends Component {

    render() {
        console.log(`Komponent ActionButton ${this.props.text}, metoda render.`);

        return (
            <button className="btn btn-primary m-2"
             onClick={this.props.callback}>
                {this.props.text}
            </button>
        )
    }
}
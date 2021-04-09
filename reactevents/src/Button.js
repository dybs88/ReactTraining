import React, { Component } from 'react';

export default class Button extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span 
                className="m-1" 
                onClick={ (e) => this.handleClick(e) }>
                <button 
                    className={`btn btn-${this.props.theme}`}
                    onClickCapture={ (e) => this.handleClick(e, true) }
                    onClick={ (e) => this.handleClick(e) }>
                        Choose theme "{this.props.theme}"
                    </button>
            </span>
        )
    }

    handleClick(event, capturePhase = false) {
        console.log(`Button: Type:${event.type} Target: ${event.target.tagName} CurrentTarget: ${event.currentTarget.tagName}`);
        if (capturePhase) {
            console.log("Skipping execute onClick function proparty of props - capture phase");
        } else if (event.bubbles && event.currentTarget !== event.target) {
            console.log("Skipping execute onClick function proparty of props - bubble phase");
        } else {
            console.log(`Executing function property onClick of props - target phase`);
            this.props.onClick(event, {newTheme: this.props.theme});
        }
    }
}
import React, { Component } from 'react';
import ActionButton from './ActionButton';

let externalCounter = 0;

export default class ExternalCounter extends Component {
    
    incrementCounter() {
        externalCounter++;
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <ActionButton callback={() => this.incrementCounter() } text="External Counter"></ActionButton>
                <div className="h5 class-center p-2">External counter: {externalCounter}</div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import TableSummary from './TableSummary';
import Button from './Button';

export default class ReverseSummary extends Component {

    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    incrementCounter = (increment) => {
        this.setState((state) => {
            return {
                counter: this.state.counter + increment
            };
        });
    }

    render() {
        const props = this.props;

        return (
            <React.Fragment>
                <TableSummary index={props.index} name={props.name}/>
                <td>
                    <Button 
                        classes="btn btn-sm btn-success ml-1" 
                        onClickCall={() => props.reverseCallback()} 
                        text={`Reverse (${props.name})`}
                        counter={this.state.counter}
                        incrementCallback={this.incrementCounter}/>
                    <Button 
                        classes="btn btn-sm btn-danger ml-1"
                        onClickCall={() => props.promoteCallback(props.name)}
                        text={`Promote (${props.name})`}
                        counter={this.state.counter}
                        incrementCallback={this.incrementCounter}/>
                    <Button></Button>
                </td>
            </React.Fragment>
        )
    }
}
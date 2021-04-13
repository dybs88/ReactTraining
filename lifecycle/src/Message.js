import React, { Component } from 'react';
import ActionButton from './ActionButton';

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSpan: false
        };
    }

    handleClick = (event) => {
        this.setState({ showSpan: !this.state.showSpan });
        this.props.callback(event);
    }

    getMessageElement() {
        let div = (
            <div id="messageDiv" className="h5 text-center p-2">
                {this.props.message}
            </div>
        );

        return this.state.showSpan ? <span>{div}</span> : div;
    }

    render() {
        console.log(`Komponent Message, metoda render.`);

        return (
            <div>
                <ActionButton theme="primary" callback={ this.handleClick } {...this.props}></ActionButton>
                { this.getMessageElement() }
            </div>
        )
    }

    componentDidMount() {
        console.log(`Komponent Message, metoda componentDidMount`);
    }

    componentDidUpdate() {
        console.log(`Komponent Message, metoda componentDidUpdate`);
    }

    componentWillUnmount() {
        console.log(`Komponent Message, metoda componentWillUnmount`);
    }

    shouldComponentUpdate(newProps, newState) {
        let change = newProps.message !== this.props.message;

        if (change) {
            console.log(`shouldComponentUpdate ${this.props.text}: aktualizacja możliwa.`);
        } else {
            console.log(`shouldComponentUpdate ${this.props.text}: aktualizacja niedozwolona.`);
        }

        return change;
    }
}
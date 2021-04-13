import React, { Component } from 'react';
import ActionButton from './ActionButton';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: ["Olek", "Ala", "Ula"]
        };
    }

    reverseList () {
        this.setState({names: this.state.names.reverse()});
    }

    render() {
        console.log(`Komponent List, metoda render.`);

        return (
            <div>
                <ActionButton callback={() => { this.reverseList() }}
                text="Revert"></ActionButton>
                {this.state.names.map((name, indeex) => {
                    return (
                        <h5 id={name.toLocaleLowerCase()} key={name}>{name}</h5>
                    )
                })}
            </div>
        )
    }
}
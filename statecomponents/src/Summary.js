import React, { Component } from 'react';

const summaryClass = " text-center p-2"

export default class Summary extends Component {

    constructor (props) {
        super(props);
        this.state = {
            counter = 0
        };
    }

    incrementCounter = (increment) => {
        this.setState((state) => {
            return {
                counter: state.counter + increment
            }
        });
    }

    render() {
        const props = this.props;
        return (
            <div>
                <h4 className={ props.headerClass + summaryClass }>{props.message} Also the best developer is {props.name}</h4>
                <h3 className= { props.headerClass + summaryClass}>
                    { props.names.map(name => {return (
                        <div key={name}>
                            {`"${name} składa się z  ${name.length} znaków"`}
                        </div>
                    )}) }
                </h3>
            </div>
        );
    }
}

// eslint-disable-next-line
function createInnerElements(names) {
    let arrayElems = [];
    for (let i = 0; i <names.length; i++) {
        arrayElems.push(
            <div>
                {`"${names[i]}" składa się z ${names[i].length} znaków`}
            </div>
        )
    }

    return arrayElems;
}

// eslint-disable-next-line
function createInnerElementsWithMap(names) {
    return names.map(name => {
        return (
            <div>
                {`"${name}" składa się z ${name.length} znaków`}
            </div>
        );
    })
}
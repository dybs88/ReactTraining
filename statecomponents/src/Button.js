import React, { Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

    static defaultProps = {
        classes: "btn btn-sm btn-primary ml-1",
        text: "Default Button",
        onClickCall: () => { console.log("Default on click call")},
        disabled: false,
        counter: 0
    }

    static propTypes = {
        classes: PropTypes.string,
        text: PropTypes.string,
        onClickCall: PropTypes.func,
        disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        counter: PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = {
            clickStatus: "",
            hasButtonBeenClicked: false
        };
    }

    render() {
        return (
            <button 
                className={this.props.classes}
                onClick={this.handleClick}
                disabled={this.props.disabled === "true" || this.props.disabled === true}>
                    {this.props.text} {`(${this.props.counter})`} {`${this.state.clickStatus}`} {this.state.hasButtonBeenClicked && <div>Clicked!</div>}
                </button>
        );
    }

    handleClick = () => {
        if (this.props.onClickCall.toString() === Button.defaultProps.onClickCall.toString()) {
            this.props.onClickCall();
            return;
        }

        this.props.incrementCallback(1);
        this.setState({
            hasButtonBeenClicked: true
        });

        this.setState((state, props) => {
            return {
                clickStatus: state.counter % 2 === 0 ? "Even" : "Odd"
            }
        });
        this.props.onClickCall();
    }
}
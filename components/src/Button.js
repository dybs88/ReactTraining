import React from 'react';
import PropTypes from 'prop-types';

Button.defaultProps = {
    classes: "btn btn-primary btn-sm ml-1",
    onClickCall: () => { console.log("Default callback");},
    text: "Default Button",
    disabled: false
}

Button.propTypes = {
    classes: PropTypes.string,
    onClickCall: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
} 

export default function Button(props) {
    return (
        <button 
            className={props.classes}
            onClick={props.onClickCall}>
                {props.text}
            </button>
    )
}
import React, { useState } from 'react';

export function HooksButton(props) {
    const [counter, setCounter] = useState(0);
    const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
    const [clickStatus, setClickStatus] = useState("");

    const handleClick = () => {
        setCounter(counter + 5);
        setHasButtonBeenClicked(true);
        setClickStatus(counter % 2 === 0 ? "Even" : "Odd");
        props.callback();
    }

    return (
        <button
        onClick={handleClick}
        className={props.classes}
        disabled={props.disabled === true || props.disabled === "true"}>
            {props.text} {`(${counter})`} {clickStatus} {hasButtonBeenClicked && <div>Clicked!</div>}
        </button>
    )
}

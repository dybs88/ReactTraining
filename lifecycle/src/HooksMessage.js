import React, { useEffect, useState } from 'react';
import ActionButton from './ActionButton';

export default function HooksMessage(props) {
    const [showSpan, setShowSpan] = useState(false);

    useEffect(() => { 
        console.log(`Wywołano funckję useEffect.`);
        return () => { console.log(`Funkcja useEffect - funkcja porządkująca`); };
     });

    const handleClick = (event) => {
        setShowSpan(!showSpan);
        props.callback(event);
    }

    const getMessageElement = () => {
        let div = (
            <div id="messageDiv" className="h5 text-center p-2">
                {props.message}
            </div>
        )

        return showSpan ? <span>{div}</span> : div;
    }

    return (
        <div>
            <ActionButton theme="primary" {...props} callback={ handleClick }></ActionButton>
            { getMessageElement() }
        </div>
    )
}

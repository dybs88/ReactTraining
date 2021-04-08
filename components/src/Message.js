import React from 'react';

export default function Message(props) {
return <h4 className={ props.headerClass + " text-center p-2"}>{props.message}</h4>
}
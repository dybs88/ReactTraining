import React from 'react';

export default function TableSummary (props) {
    return (
    <React.Fragment>
        <td>{props.index +1}</td>
        <td>{props.name}</td>
        <td>{props.name.length}</td>
    </React.Fragment>
    )
}
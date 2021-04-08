import React from 'react';
import TableSummary from './TableSummary';
import Button from './Button';

export default function ReverseSummary(props) {
    return (
        <React.Fragment>
            <TableSummary index={props.index} name={props.name}/>
            <td>
                <Button classes="btn btn-sm btn-success ml-1" onClickCall={() => props.reverseCallback()} text="Reverse"/>
                <Button classes="btn btn-sm btn-danger ml-1" onClickCall={() => props.promoteCallback(props.name)} text="Promote"/>
                <Button/>
            </td>
        </React.Fragment>
    )
}
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import Message from './Message';
import Summary from './Summary';
import TableSummary from './TableSummary';
import ReverseSummary from './ReverseSummary';

let names = ["Jarek", "Ala", "Marek"];

export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">Hello World!</h1>
      <Message message="This is a message from App component" headerClass="bg-primary text-white"/>
      <Summary message="App compomenent give me this info to show." name="Łukasz" headerClass="bg-primary text-white" names={["Jarek", "Ala", "Marek"]}/>
      {returnCustomTableWith("Summary")}
      {returnCustomTableWith("ReverseSummary")}
    </div>
    )
}

function returnCustomTableWith(componentName) {
  return (
    <React.Fragment>
      <div className="col-1 form-group">
        <input className="form-control" id="newName" type="text" />
        <button className="btn btn-primary btn-sm">Add</button>
      </div>
    <table className="table table-sm table-striped">
      <thead>
        <tr>
          <th>Nr</th>
          <th>Name</th>
          <th>Letter count</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name, index) => {
          if (componentName === "Summary") {
            return (
              <tr key={name}>
                <TableSummary index={index} name={name} />
              </tr>
            )
          } else {
            return (
              <tr key={name}>
                <ReverseSummary index={index} name={name} reverseCallback={reverseNames} promoteCallback={promoteCallback}/>
              </tr>
            )
          }
        })}
      </tbody>
    </table>
    </React.Fragment>
  )
}

function reverseNames() {
  names = names.reverse();
  ReactDOM.render(<App/>, document.getElementById('root'));
}

function promoteCallback(name) {
  names = [name, ...names.filter(x => x !== name)];
  ReactDOM.render(<App/>, document.getElementById('root'));
}

// eslint-disable-next-line
function addCallback(name) {
  names.push(name);
  ReactDOM.render(<App/>, document.getElementById('root'));
}

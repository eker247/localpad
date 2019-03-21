import React from 'react';

export default function AskDelete(props) {
  if (!props.notebook) {
    return null;
  }
  return (
    <>
    <div>
      Are you sure you want to delete {props.notebook}?
    </div>
    <button className="pure-button m-3" onClick={props.remove}>Delete</button>
    <button className="pure-button m-3" onClick={props.cancel}>Cancel</button>
    </>
  );
};
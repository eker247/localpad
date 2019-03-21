import React from 'react';

export default function AddNotepadForm(props) {
  return (
    <form onSubmit={props.handleForm} className="pure-form">
      <label htmlFor="notesName">Notepad name: </label>
      <input id="notesName" type="text" placeholder="Notepad name" />
    </form>
  );
}

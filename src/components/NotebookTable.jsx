import React from 'react';

export default function NotebookTable(props) {
  return (
    <table className="pure-table pure-table-horizontal pure-table-stripped mb-3">
      <thead>
        <tr><td>Name</td><td>Action</td></tr>
      </thead>
      <tbody>
        {props.notesRows}
      </tbody>
    </table>
  );
}
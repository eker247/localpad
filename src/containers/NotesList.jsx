import React, { Component } from 'react'
import { AddNotepadForm, NotebookTable, AskDelete } from '../components';
import storage from '../services/Storage';

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: storage.getNotes(),
    }
  }

  handleForm = (e) => {
    e.preventDefault();
    const notes = this.state.notes.concat(e.target['notesName'].value);
    storage.saveNotes(notes);
    this.setState({
      notes: notes
    });
  }

  redirect = (n) => {
    this.props.history.push(`/edit/${n}`);
  }

  rmNote = () => {
    storage.rmNote(this.state.notepadToRemove);
    this.setState({ notes: storage.getNotes(), notepadToRemove: undefined });
  }

  askDelete = (e) => {
    this.setState({ notepadToRemove: e });
  }

  cancelRemove = () => this.setState({ notepadToRemove: undefined });
  NLForm = () => {
    if (this.state.notepadToRemove) {
      return <AskDelete notebook={this.state.notepadToRemove} remove={this.rmNote} cancel={this.cancelRemove} />;
    } else {
      return <AddNotepadForm handleForm={this.handleForm} />
    }
  }

  render() {
    let notesRows;
    // let table;
    let noRowAlert;
    if (!this.state.notes) {
      noRowAlert = <div className="mb-3">No notepads found</div>;
    } else {
      notesRows = this.state.notes.map(r => {
        return (
          <tr key={r} className="cptr">
            <td onClick={() => this.redirect(r)}>{r}</td>
            <td onClick={() => this.askDelete(r)}>X</td>
          </tr>
        )
      });
    }
    
    return (
      <>
        {noRowAlert}
        <NotebookTable notesRows={notesRows} />
        <this.NLForm />
      </>
    );
  }
}

import React from 'react';

import ReactQuill from 'react-quill'; // ES6
import './Quill.css';

export default class Editor extends React.Component {
  noteName;

  constructor(props) {
    super(props);
    this.noteName = `np-${this.props.match.params.name}`;
    const text = localStorage.getItem(this.noteName);
    this.state = { text };
  }
  
  handleTextChange = (text) => {
    localStorage.setItem(this.noteName, text);
    this.setState({ text });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    return (
      <ReactQuill ref="quill" value={this.state.text} onChange={this.handleTextChange} />
    );
  }
}
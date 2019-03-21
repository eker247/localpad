import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Editor from './containers/Editor';
import NotesList from './containers/NotesList';

const menu = [
  { path: '/', component: NotesList, name: 'NotesList' },
  { path: '/edit/:name', component: Editor },
];

const routes = menu.map(r => <Route key={r.path} path={r.path} exact component={r.component} />);
const links = menu.map(r => {
  if (!r.name) {
    return null;
  }
  return (
  <li key={r.path} className="pure-menu-item">
    <Link to={r.path} className="pure-menu-link">
      {r.name}
    </Link>
  </li>
)});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list">{links}</ul>
        </div>
        {routes}
      </Router>
    );
  }
}

export default App;

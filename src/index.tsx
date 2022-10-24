import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">React!</div>;

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);

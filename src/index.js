import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './components/Hello';

function render(Component) {
  ReactDOM.render(Component, document.getElementById('root'));
}

render(<Hello msg="World" />);

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {

    render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<Hello url="http://127.0.0.1:9000/"/>, document.getElementById('hello'));




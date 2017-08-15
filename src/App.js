import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game.js';

class App extends React.Component{
    render(){
        return (
            <div>
              <h1>Hello World1</h1>
              <Game></Game>
            </div>
        );
    }
}

export default App;


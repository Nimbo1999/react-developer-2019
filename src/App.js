import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Dracula',
          id: 'monster1'
        },
        {
          name: 'Zombie',
          id: 'monster2'
        },
        {
          name: 'Frankenstein',
          id: 'monster3'
        },
      ]
    };
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h3 key={monster.id}>{ monster.name }</h3>)
        }
      </div>
    );
  }
}

export default App;

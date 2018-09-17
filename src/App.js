import React, { Component } from 'react';
import './App.css';
import { GifsContainer } from "./containers/GifsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">

     <GifsContainer src={this.props.src} alt="text"/>
  </div>
    );
  }
}

export default App;

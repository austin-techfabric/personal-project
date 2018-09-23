import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Routes from './routes';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        {Routes}
     </div>
    );
  }
}

export default App;

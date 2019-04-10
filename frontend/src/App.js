import React, { Component } from 'react';
import './App.css';
import cutie from './cutie.jpg'
import SimpleTable from './SimpleTable';
class App extends Component {
  
  render() {
    //backend()
    return (
      <div className="App">
        <header className="App-header">
          <div className="Title">
            <p>HOT WHEELS BITCHES</p>
          </div>
          <div>
            <img src={cutie} className="App-logo" alt="logo" />
          </div>  
        </header>
        <div className="Table">
          <SimpleTable />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import routes from './routes';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='temp-app'>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;

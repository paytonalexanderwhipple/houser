import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import routes from './routes.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;

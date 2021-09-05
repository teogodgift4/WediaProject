import React from 'react';
import logo from './logo.svg';
import './index.css'
import Myheader from './Myheader';
import StaticHeader from './StaticHeader';
import Mynavigation from './Mynavigation';
import Mytitle from './Mytitle';

function App() {
  return (
    <div className="App">
    <StaticHeader/>
    <Myheader/>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import TopNavBar from './components/TopNavBar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <LandingPage/>
    </div>
  );
}

export default App;

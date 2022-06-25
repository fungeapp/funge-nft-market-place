import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import TopNavBar from './components/TopNavBar';
import LandingPage from './components/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';

function App() {
  const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <TopNavBar/>
      <h1>{ isAuthenticated ? JSON.stringify(user.given_name, null, 2) : ""}</h1>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;

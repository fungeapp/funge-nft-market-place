import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import { MetaMaskProvider } from 'metamask-react';
import LandingPage from './components/LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import Signin from "./components/Signin";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feeds from "./components/Feeds";
import Notifications from "./components/Notifications";
import Wallet from "./components/Wallet";


function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="login" element={<Login />} />
          <Route path="feeds" element={
              <MetaMaskProvider>
              <Feeds />
              </MetaMaskProvider>
          } />
        </Routes>
      </BrowserRouter>
      {/* <h1>{ isAuthenticated ? JSON.stringify(user.given_name, null, 2) : ""}</h1> */}
    </div>
  );
}

export default App;

import React from 'react'
import App from '../App';
import Logo from "./img/2722120.png";

const Main = () => {
  return (
    <div>
       <div className="logo">
          <img src={Logo} alt="wallet-logo"/>
          </div> 
          <div className="main-page">
        <h2>Welcome to wallet</h2>
        </div>
        
    </div>
  )
}

export default Main

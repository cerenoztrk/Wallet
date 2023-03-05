import React from "react";

import Sidebar from "./Components/Sidebar";

const Homepage = () => {
  return (
    <>
      <div className="info">
        <h1>Click here for more detailed information</h1>
      </div>
      <div className="homepage-container">
        <div className="content-user">
          <a href="/Profile">PROFİLE</a>
        </div>
        <div className="content-wallet">
          <a href="/Wallet">WALLET</a>
        </div>
        <div className="content-invoices">
          <a href="/Invoices">INVOICES</a>
        </div>
        <div className="content-debits">
          <a href="/Debits">DEBITS</a>
        </div>
      </div>
      <Sidebar/>
    </>
  );
};

export default Homepage;

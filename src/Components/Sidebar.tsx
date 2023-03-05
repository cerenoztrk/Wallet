import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    
        
        <div className="sidebar">
            <div className="main-page">
        <h2>Welcome to wallet</h2>
        </div>
          <nav className="nav">
            <ul>
              <li><Link to="/Login">LOGIN</Link></li>
              <li><Link to="/homepage">HOMEPAGE</Link></li>
              <li><Link to="/Profile">PROFİLE</Link></li>
              <li><Link to="/Wallet">WALLET</Link></li>
              <li><Link to="/Invoices">INVOICES</Link></li>
              <li><Link to="/Debits">DEBITS</Link></li>
            </ul>
          </nav>
        </div>
      
);
}

export default Sidebar;

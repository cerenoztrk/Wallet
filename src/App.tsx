import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Wallet from "./Wallet";
import Invoices from "./Invoices";
import Debits from "./Debits";
import Homepage from "./homepage";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Invoices" element={<Invoices />} />
          <Route path="/Debits" element={<Debits />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;

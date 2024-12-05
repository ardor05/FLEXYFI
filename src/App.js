import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Balance from "./pages/Balance";
import QRPay from "./pages/QRPay";
import Profile from "./pages/Profile";
import Reload from "./components/Reload";
import Withdraw from "./components/Withdraw";
import WalletConnection from "./components/WalletConnection";
import "./App.css"; // Make sure to add custom CSS

function App() {
    const [walletAddress, setWalletAddress] = useState(null);

    return (
        <Router>
        <div>
            <WalletConnection setWalletAddress={setWalletAddress} />
            {walletAddress && <p>Wallet Address: {walletAddress}</p>}
        </div>
            <div className="app-container">
                <h1>FLEXYFI</h1>
               
                {/* Main content */}
                <Routes>
                    <Route path="/balance" element={<Balance />} />
                    <Route path="/qrpay" element={<QRPay />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/reload" element={<Reload />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                </Routes>

                 {/* Navigation Bar */}
                 <nav className="navbar">
                    <Link to="/balance" className="nav-link">Balance</Link>
                    <Link to="/qrpay" className="nav-link">QR Pay</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </nav>
            </div>
        </Router>
    );
}

export default App;

import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

function WalletConnection({ setWalletAddress }) {
    const [isConnected, setIsConnected] = useState(false);

    const connectWallet = async () => {
        if (window.solana && window.solana.isPhantom) {
            try {
                const response = await window.solana.connect();
                const publicKey = response.publicKey.toString();
                setWalletAddress(publicKey);
                setIsConnected(true);
            } catch (err) {
                console.error("Wallet connection failed:", err);
            }
        } else {
            alert("Phantom Wallet is not installed!");
        }
    };

    return (
        <div>
            {isConnected ? (
                <p>Wallet Connected</p>
            ) : (
                <button onClick={connectWallet}>Connect Phantom Wallet</button>
            )}
        </div>
    );
}

export default WalletConnection;

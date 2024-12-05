import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Connection, PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, AccountLayout } from "@solana/spl-token";
import ReloadPage from "../components/Reload";
import WithdrawPage from "../components/Withdraw";

const SOLANA_NETWORK = "https://api.mainnet-beta.solana.com";
const USDC_MINT_ADDRESS = "EaT5DPErBBdaD3nSGbGk38k89jECFieaznDWy13VXfW";

const BalancePage = () => {
  const navigate = useNavigate();
  const [flexyFiBalance, setFlexyFiBalance] = useState(100);
  const [phantomAddress, setPhantomAddress] = useState(null);
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [showReload, setShowReload] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      window.solana
        .connect()
        .then(({ publicKey }) => {
          setPhantomAddress(publicKey.toString());
          fetchUSDCBalance(publicKey);
        })
        .catch((err) => console.error("Phantom wallet connection error:", err));
    } else {
      alert("Phantom wallet not found! Please install Phantom.");
    }
  }, []);

  const fetchUSDCBalance = async (publicKey) => {
    try {
      const connection = new Connection(SOLANA_NETWORK);
      const accounts = await connection.getTokenAccountsByOwner(publicKey, {
        programId: TOKEN_PROGRAM_ID,
      });

      let usdcTokenAccount = null;

      accounts.value.forEach((account) => {
        const accountInfo = AccountLayout.decode(account.account.data);
        const mintAddress = new PublicKey(accountInfo.mint).toString();
        if (mintAddress === USDC_MINT_ADDRESS) {
          usdcTokenAccount = account.pubkey; // Fix: Use pubkey
        }
      });

      if (usdcTokenAccount) {
        const accountInfo = await connection.getParsedAccountInfo(usdcTokenAccount);
        const balance = accountInfo.value?.data?.parsed?.info?.tokenAmount?.uiAmount || 0;
        setUsdcBalance(balance);
      } else {
        setUsdcBalance(0);
      }
    } catch (error) {
      console.error("Error fetching USDC balance:", error.message || error);
    }
  };

  const handleReloadClick = () => setShowReload(true);
  const handleCloseReload = () => setShowReload(false);

  const handleOpenWithdraw = () => setShowWithdraw(true);
  const handleCloseWithdraw = () => setShowWithdraw(false);

  const updateBalance = (amount) => {
    setFlexyFiBalance((prev) => prev + Number(amount));
  };

  return (
    <div style={{ padding: "40px", color: "white", backgroundColor: "black" }}>
      <h2>Wallet Balance</h2>
      {phantomAddress ? (
        <h1>{flexyFiBalance} USDe</h1>
      ) : (
        <p>Connecting to Phantom Wallet...</p>
      )}
      <button onClick={handleReloadClick} style={styles.button}>
        Reload
      </button>
      <button onClick={handleOpenWithdraw} style={styles.button}>
        Withdraw
      </button>

      {/* Show Reload popup */}
      {showReload && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <ReloadPage updateBalance={updateBalance} />
            <button onClick={handleCloseReload} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Show Withdraw popup */}
      {showWithdraw && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <WithdrawPage
              flexyFiBalance={flexyFiBalance}
              updateBalance={updateBalance}
              style={{ color: "black" }}
            />
            <button onClick={handleCloseWithdraw} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    cursor: "pointer",
    margin: "10px",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    color: "black",
  },
  modalContent: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "80%",
    maxWidth: "400px",
    color: "black",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default BalancePage;

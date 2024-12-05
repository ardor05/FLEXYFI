import React, { useState } from "react";

const ReloadPage = ({ updateBalance }) => {
  const [selectedToken, setSelectedToken] = useState("");
  const [mintAmount, setMintAmount] = useState("");

  const tokens = ["USDC", "DAI", "USDT", "USDD"];

  const handleSwap = () => {
    if (!selectedToken || !mintAmount || Number(mintAmount) <= 0) {
      alert("Please select a token and enter a valid amount.");
      return;
    }

    const mintedAmount = Number(mintAmount);
    updateBalance(mintedAmount); // Update the balance in the parent
    alert(`${mintedAmount} USDe minted successfully!`);
  };

  return (
    <div>
      <h3 style={styles.title}>Reload</h3> {/* Styled in black */}
      <select value={selectedToken} onChange={(e) => setSelectedToken(e.target.value)}>
        <option value="">-- Select Token --</option>
        {tokens.map((token) => (
          <option key={token} value={token}>
            {token}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={mintAmount}
        onChange={(e) => setMintAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleSwap} style={styles.swapButton}>
        SWAP!
      </button>
    </div>
  );
};

const styles = {
  swapButton: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    marginTop: "5px",
    fontSize: "10px",
    borderRadius: "10px", // Increased borderRadius for a more rounded look
    cursor: "pointer",
  },
  title: {
    color: "black", // Set the text color to black
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
};

export default ReloadPage;

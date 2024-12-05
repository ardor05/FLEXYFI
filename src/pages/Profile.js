import React, { useState } from "react";

const ProfilePage = () => {
  const [transactions] = useState([
    { date: "2024-12-01", amount: "50 USDe", type: "Pay" },
    { date: "2024-12-02", amount: "30 USDe", type: "Receive" },
    { date: "2024-12-03", amount: "20 USDe", type: "Pay" },
    { date: "2024-12-04", amount: "40 USDe", type: "Receive" },
    { date: "2024-12-05", amount: "15 USDe", type: "Pay" },
  ]);

  const [showSummary, setShowSummary] = useState(false);

  // Calculating total amounts for Pay and Receive
  const totalPay = transactions
    .filter((transaction) => transaction.type === "Pay")
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalReceive = transactions
    .filter((transaction) => transaction.type === "Receive")
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const handleViewSummary = () => {
    setShowSummary(true);
  };

  const handleCloseSummary = () => {
    setShowSummary(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <h3>Welcome Razi!</h3>
      <div>
        <button style={styles.utilityButton}>Settings</button>
        <button style={styles.utilityButton}>Release Notes</button>
        <button style={styles.utilityButton}>Support</button>
      </div>
      <div>
        <h3>Recent Transactions</h3>
        {transactions.map((transaction, index) => (
          <div key={index}>
            <p>
              {transaction.date} - {transaction.amount} ({transaction.type})
            </p>
          </div>
        ))}
      </div>
      <button style={styles.button} onClick={handleViewSummary}>
        View Summary
      </button>

      {showSummary && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3>Transaction Summary</h3>
            <p><strong>Total Pay:</strong> {totalPay} USDe</p>
            <p><strong>Total Receive:</strong> {totalReceive} USDe</p>
            <button style={styles.closeButton} onClick={handleCloseSummary}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  utilityButton: {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
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
  },
  modalContent: {
    backgroundColor: "white",
    padding: "40px",  // Increased padding for larger modal
    borderRadius: "20px",
    textAlign: "center",
    width: "250px",   // Increased width for larger modal
    minHeight: "150px", // Added minimum height to ensure it's big enough
    color: "black",
  },
  closeButton: {
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProfilePage;

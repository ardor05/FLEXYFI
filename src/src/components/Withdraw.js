import React, { useState, useEffect } from "react";

const WithdrawPage = ({ flexyFiBalance, updateBalance }) => {
    const [withdrawAmount, setWithdrawAmount] = useState("");
    const [withdrawStatus, setWithdrawStatus] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [exchangeRate, setExchangeRate] = useState(1); // Default to 1 for USD
    const [fiatValue, setFiatValue] = useState("");

    const currencies = ["USD", "EUR", "JPY", "MYR", "SGD", "GBP", "AUD", "CAD", "CHF", "CNY"];
 // Add more as needed

    // Fetch live forex rates (replace `YOUR_API_KEY` with your forex API key)
    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch(
                    `https://api.exchangerate-api.com/v4/latest/USD` // Example API
                );
                const data = await response.json();
                if (data && data.rates[selectedCurrency]) {
                    setExchangeRate(data.rates[selectedCurrency]);
                } else {
                    console.error("Exchange rate not available.");
                }
            } catch (error) {
                console.error("Error fetching exchange rates:", error);
            }
        };

        fetchExchangeRate();
    }, [selectedCurrency]);

    // Calculate fiat value when withdrawAmount or exchangeRate changes
    useEffect(() => {
        if (withdrawAmount && !isNaN(withdrawAmount)) {
            setFiatValue((Number(withdrawAmount) * exchangeRate).toFixed(2));
        } else {
            setFiatValue("");
        }
    }, [withdrawAmount, exchangeRate]);

    const processWithdrawal = () => {
        if (!withdrawAmount || isNaN(withdrawAmount) || Number(withdrawAmount) <= 0) {
            setWithdrawStatus("Please enter a valid withdrawal amount.");
            return;
        }
    
        const amount = Number(withdrawAmount);
    
        // Simulate withdrawal process
        setWithdrawStatus("Processing withdrawal...");
        setTimeout(() => {
            if (flexyFiBalance < amount) {
                setWithdrawStatus("Insufficient funds for withdrawal.");
            } else {
                updateBalance(-amount); // Use the updateBalance function passed from parent to deduct from the balance
                setWithdrawStatus(
                    `Successfully transferred ${amount} USDe (~${fiatValue} ${selectedCurrency}) to your bank account.`
                );
            }
        }, 2000); // Simulate a 2-second delay
    };
    

    return (
        <div>
            <h3 style={{ color: "black" }}>Withdraw</h3>
            <label style={{ color: "black" }}>
                Select Currency:
                <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    style={{
                        marginLeft: "30px",
                        padding: "5px",
                        borderRadius: "5px",
                    }}
                >
                    {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </label>
            <div style={{ marginBottom: "20px" }}></div> {/* Spacer between dropdown and input */}
            <input
                type="number"
                placeholder="Enter USDe amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                style={{
                    padding: "5px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    margin: "10px 0",
                    width: "100%",
                    maxWidth: "300px",
                    border: "1px solid #ccc",
                }}
            />
            <p style={{ color: "black" }}>
                Expected Output: {fiatValue} {selectedCurrency}
            </p>
            <button
                onClick={processWithdrawal}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Confirm Withdrawal
            </button>
            <p style={{ color: "black", marginTop: "15px" }}>{withdrawStatus}</p>
        </div>
    );
};

export default WithdrawPage;

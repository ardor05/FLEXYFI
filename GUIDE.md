
### FLEXYFI: Quick Start Guide

#### Prerequisites
Before running **FLEXYFI**, make sure you have the following installed:

1. **Node.js** (v16.x or higher)  
   - Download and install from [here](https://nodejs.org/en/).

2. **npm** (comes with Node.js)
   - Verify installation by running the following commands:
     ```bash
     node -v
     npm -v
     ```

3. **VSCode** (or any other code editor)
   - Download and install from [here](https://code.visualstudio.com/).

4. **Phantom Wallet**
   - Install the Phantom Wallet browser extension from [here](https://phantom.app/).

---

### Clone the Repository

1. Open your terminal (Command Prompt, PowerShell, or VSCode integrated terminal).
2. Clone the **FLEXYFI** repository from GitHub:
   ```bash
   git clone https://github.com/your-username/FLEXYFI.git
   ```
3. Change to the **FLEXYFI** project directory:
   ```bash
   cd FLEXYFI
   ```

---

### Install Dependencies

1. **Navigate to the project directory** (if not already there).
2. Install the necessary dependencies using npm:
   ```bash
   npm install
   ```

---

### Set up the Solana Network

1. Make sure you have **Phantom Wallet** installed and set up in your browser.
2. Connect your Phantom Wallet to the **Solana Mainnet**.
3. Ensure you have some **USDC** in your Phantom wallet to interact with **FLEXYFI** (you can acquire some from Solana faucets or swap tokens).

---

### Running the Application Locally

1. To run **FLEXYFI** locally, use the following command:
   ```bash
   npm start
   ```

2. Open your browser and go to **http://localhost:3000** to view the application.

---

### Features

Once the application is running, you’ll be able to interact with the following features:

- **Wallet Balance**  
  View your FlexyFi balance (USDe) from the Phantom Wallet.
  
- **Reload/Swap**  
  Swap supported stablecoins (e.g., USDC) from your Phantom Wallet to USDe using **LayerZero's OFT** technology.

- **Withdraw**  
  Convert USDe to fiat currencies like **USD**, **EUR**, **MYR**, **JPY**, **SGD**, **GBP**, **AUD**, **CAD**, **CHF**, and **CNY**.

- **QR Payments**  
  - Generate a QR code to receive payments in USDe.
  - Scan a QR code to make payments.

---

### Running in Production Mode

For a production build (optimized for deployment):

1. Run the following command:
   ```bash
   npm run build
   ```

2. This will create a **build** folder containing the optimized app, ready for deployment.

---

### Troubleshooting

1. **Phantom Wallet not connected?**
   - Make sure that Phantom Wallet is installed and connected to your browser. If not, try reconnecting by clicking on the Phantom Wallet extension.

2. **USDC balance is zero?**
   - You can acquire USDC on the Solana network via Solana faucets or exchange it from another wallet.

3. **API errors?**
   - Ensure that you are correctly connected to the Solana Mainnet. Check your internet connection if API requests are failing.

---

### Additional Information

- **GitHub Repository**: [FLEXYFI GitHub](https://github.com/your-username/FLEXYFI)
- **Phantom Wallet Documentation**: [Phantom Docs](https://docs.phantom.app/)

---

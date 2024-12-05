# FLEXYFI (Flexibly Exchange Your Finance)
FLEXYFI is a decentralized finance (DeFi) application that leverages modern blockchain technologies to provide seamless management of USDe, an omnichain stablecoin. Users can store, pay, receive, and withdraw funds with a sleek and user-friendly interface. The app integrates LayerZero (OFT) for blockchain interoperability and seamless token-swapping.


### FEATURES OF FLEXYFI

#### 🔗 Blockchain Integration:
- **Stablecoin Swaps (USDC to USDe):** Users can swap stablecoins such as USDC from their Phantom Wallet to USDe using LayerZero's Omnichain Fungible Token (OFT) technology, enabling seamless cross-chain transactions.
- **OFT Technology:** This technology allows users to move stablecoins between different blockchain networks, enhancing interoperability and accessibility.

#### 💰 Balance Management:
- **View Wallet Balance:** Users can check their USDe balance at any time, ensuring full transparency of available funds.
- **Reload Wallet:** Users can convert other supported stablecoins like USDC into USDe directly from their wallet, offering an easy way to fund their FlexyFi account.
- **Withdraw Funds:** FlexyFi supports converting USDe into various fiat currencies, including USD, EUR, MYR, JPY, SGD, GBP, AUD, CAD, CHF, and CNY, using real-time forex conversion rates for accurate payouts.

#### 📱 QR Payments:
- **Pay with QR Code:** Users can pay others by scanning a QR code and making instant payments using their USDe balance.
- **Generate QR Code for Payments:** Sellers can enter an amount and generate a QR code that others can scan to pay for goods or services, streamlining the payment process.
  
#### 🧑 Profile Management:
- **Transaction History:** Users can view a detailed history of their transactions, including deposits, withdrawals, and swaps, providing full visibility of their activity.
- **Utilities Access:** Users can access settings to manage their account preferences, support for troubleshooting, and release notes for updates and new features.
- **Spending Summaries:** The app tracks and displays monthly and weekly spending summaries, helping users monitor their financial activity, manage budgets, and assess trends in their spending behavior.

These features collectively create a seamless and user-friendly experience for decentralized finance management, offering a wide range of functions that improve wallet usability and payment flexibility.


### TECHNICAL DETAILS OF FLEXYFI

We built the **FlexyFi app** primarily using **React** and **VSCode** to rapidly prototype and demonstrate our idea. React provided us with a robust and flexible frontend framework, allowing us to create a dynamic, responsive, and component-based user interface. We utilized **VSCode** as our development environment, taking advantage of its integrated tools for JavaScript and React, as well as helpful extensions such as ESLint and Prettier for maintaining clean and readable code.

#### **Frontend Development with React:**
- **Component-based Architecture:** React’s modular component-based structure allowed us to break down the app into reusable pieces, such as the balance display, wallet interaction, QR code generation, and payment functionality. This approach helped streamline development and improved maintainability.
- **State Management:** We used React's built-in `useState` and `useEffect` hooks to manage the app's state, such as the user's wallet balance, transaction status, and selected fiat currency. This made it easy to handle real-time updates and reflect changes in the UI seamlessly.
- **Routing and Navigation:** For smooth navigation between different sections of the app, such as the balance page, wallet actions, and profile, we implemented React Router. This enabled a dynamic single-page application experience without unnecessary reloads.
- **Responsive Design:** The frontend was built to be responsive, adjusting seamlessly across devices to ensure a good user experience on both desktop and mobile platforms.

#### **Simulated Backend (Smart Contracts and Blockchain Interaction):**
- Given the limited time for backend development, we used simulated smart contracts to represent the core functionalities of blockchain interactions, such as **stablecoin swaps** and **wallet transactions**. These smart contracts were designed to mimic the behavior of a decentralized system without directly interacting with a live blockchain.
- **LayerZero Protocol Integration:** While the smart contract interaction was simulated, we demonstrated how the LayerZero protocol could be used to transfer assets across blockchains. LayerZero’s **Omnichain Fungible Token (OFT)** was key in showcasing the cross-chain transaction model.
- **Simulated Payment Process:** The actual blockchain payment flow, such as scanning a QR code to complete a transaction, was represented through frontend interactions, ensuring that users could visualize how the process would work in a real-world scenario.

#### **API Integrations:**
1. **Exchange Rate API:** To facilitate the conversion of USDe to fiat currencies, we integrated an **Exchange Rate API**. This allowed the app to pull live conversion rates for multiple currencies such as USD, EUR, JPY, MYR, SGD, GBP, and others, ensuring that users receive real-time updates on conversion rates.
   - Example API used: [ExchangeRate-API](https://www.exchangerate-api.com/)
   - This integration enabled the app to simulate real-world financial transactions and allow users to view and convert their USDe balance to local fiat values.

2. **Phantom Wallet API:** For blockchain wallet integration, we used the **Phantom Wallet API** to interact with Solana-based wallets, enabling users to connect their Phantom Wallets and access their Solana-based assets like USDC. This allowed users to view balances and execute transactions directly from their wallets.
   - Phantom’s easy-to-use JavaScript SDK made it straightforward to establish wallet connectivity within the app.

3. **QR Code Generator:** To simulate the QR payment functionality, we integrated a **QR Code generation API** to dynamically generate unique QR codes for each transaction. This was essential for the payment process, where users could enter an amount and instantly create a scannable code for receiving payments.
   - Example: We used libraries like `qrcode.react` to generate the QR codes for payments.

#### **FUTURE ENHANCEMENT:**
- **Smart Contract Deployment:** In the future, we plan to replace the simulated backend with actual deployed smart contracts on Solana or Ethereum to facilitate live interactions, token swaps, and decentralized payment processing.
- **Blockchain Integration with Real Transactions:** The final backend will also incorporate real-time transaction processing on LayerZero and blockchain networks, ensuring that payments are made directly on-chain.
- **User Authentication and Security:** Future enhancements will also include secure user authentication, multi-signature wallet support, and encrypted transaction histories to ensure safe and private user interactions.

### CONCLUSION:
We focused on creating a highly functional and visually appealing **frontend** using **React**, integrating various APIs to simulate real-world functionality and demonstrate our product's potential. The use of smart contract simulations allowed us to showcase the decentralized finance features while also simulating blockchain transactions and payments. Though the backend is still in its early stages, the frontend is fully ready to demonstrate the concept, with the ability to scale to a fully decentralized application in the future.

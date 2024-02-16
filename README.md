# Your React App README

Welcome to your React App! This application integrates with Metamask and utilizes the Polygon Mumbai Testnet to deploy Gateway contracts. Follow the steps below to get started.

## Prerequisites

Before you begin, ensure you have the following requirements met:

- **Node.js**: Version 18 or higher. You can check your Node version by running `node -v` in your terminal.
- **Environment Variables**: Create a `.env` file at the root of your project directory. Add the following line to it:
`REACT_APP_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_key

Replace `your_wallet_connect_key` with your Wallet Connect project ID, which can be generated at [Wallet Connect Cloud](https://cloud.walletconnect.com/app). Navigate to the Dashboard, select `projects`, then `create`, and copy the `projectId` into your `.env` file.
- **Metamask Extension**: Ensure Metamask is installed in your browser. This is crucial for connecting your wallet to the app.
- **Network Connection**: Your Metamask should be connected to the `Polygon Mumbai Testnet`.

## How to Start the App

1. Install dependencies by running:
`npm install`
2. Start the application with:
`npm run start`
3. Open your browser and visit [http://localhost:3000/](http://localhost:3000/) to view the app.

## How to Use the App

1. At the home page (`http://localhost:3000/`), click the `Connect` button to link your Metamask wallet to the app. Ensure your Metamask is connected to the `Polygon Mumbai Testnet`.
2. To deploy a new Gateway contract, click on `Deploy new gateway`. Accept the signature requests from Metamask when prompted.
3. The address of the newly deployed gateway contract will be displayed on the screen.
4. You can deploy additional Gateway contracts by clicking on `Deploy new gateway` again.

Enjoy using the app to deploy Gateway contracts on the Polygon Mumbai Testnet. If you encounter any issues, please refer to the troubleshooting section below or contact support.

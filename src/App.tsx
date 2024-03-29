import React from "react";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { ChakraProvider, Text } from "@chakra-ui/react";
import Pages from "./containers/Pages";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import customTheme from "./customTheme";

const { REACT_APP_WALLET_CONNECT_PROJECT_ID } = process.env;

const mumbaiNetwork = {
  chainId: 80001,
  name: "Polygon Mumbai Testnet",
  currency: "MATIC",
  explorerUrl: "https://mumbai.polygonscan.com/",
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
};

const metadata = {
  name: "NERIF Network",
  description: "Decentralized Cross-Chain Smart Contract Automation Platform",
  url: "https://nerif.network/",
  icons: ["https://avatars.mywebsite.com/"],
};

const App = () => {
  if (!REACT_APP_WALLET_CONNECT_PROJECT_ID) {
    return (
      <Text>
        Something went wrong. Make sure "projectId" is defined in the .env
      </Text>
    );
  }
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [mumbaiNetwork],
    projectId: REACT_APP_WALLET_CONNECT_PROJECT_ID,
    enableAnalytics: true,
  });

  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;

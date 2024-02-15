import React from "react";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Pages from "./containers/Pages";
import Navbar from "./components/Navbar";
import Web3ConnectButton from "./containers/Web3Connect";

const { REACT_APP_WALLET_CONNECT_PROJECT_ID } = process.env;

const projectId = REACT_APP_WALLET_CONNECT_PROJECT_ID || "";

console.log("projectId", projectId);

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

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mumbaiNetwork],
  projectId,
  enableAnalytics: true,
});

const App = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  console.log(address, chainId, isConnected);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Pages />
    </ChakraProvider>
  );
};

export default App;

import React from "react";
import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { Button, ChakraProvider, theme } from "@chakra-ui/react";
import Web3ConnectButton from "./containers/Web3ConnetButton";

const { REACT_APP_WALLET_CONNECT_PROJECT_ID } = process.env;

const projectId = REACT_APP_WALLET_CONNECT_PROJECT_ID || "";

console.log("projectId", projectId);

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
  enableAnalytics: true,
});

const App = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  console.log(address, chainId, isConnected);

  return (
    <ChakraProvider theme={theme}>
      <Web3ConnectButton />
      console.log
      <Button backgroundColor="teal.500">fsfs</Button>
    </ChakraProvider>
  );
};

export default App;

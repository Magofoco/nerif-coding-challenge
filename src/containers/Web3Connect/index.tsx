import { Button } from "@chakra-ui/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

const Web3ConnectButton = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <Button onClick={() => open()}>
      {isConnected ? "Disconnect" : "Connect"}
    </Button>
  );
};

export default Web3ConnectButton;

import { Button } from "@chakra-ui/react";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useDisconnect,
} from "@web3modal/ethers/react";

const Web3ConnectButton = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();

  return (
    <Button
      variant={isConnected ? "default" : "wallet"}
      onClick={() => (isConnected ? disconnect() : open())}
    >
      {isConnected ? "Disconnect" : "Connect"}
    </Button>
  );
};

export default Web3ConnectButton;

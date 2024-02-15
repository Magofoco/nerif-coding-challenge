import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

const Web3ConnectButton = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: "Networks" })}>
        Open Network Modal
      </button>
    </>
  );
};

export default Web3ConnectButton;

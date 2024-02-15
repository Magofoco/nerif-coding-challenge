import DeployerComponent from "../../components/DeployerComponent";
import { GATEWAY_FACTORY_CONTRACT_ADDRESS } from "../../blockchain/contractAddresses";
import GATEWAY_FACTORY_CONTRACT_ABI from "../../blockchain/contracts/GatewayFactoryABI.json";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import Web3ConnectButton from "../Web3Connect";
import { BrowserProvider, ethers } from "ethers";
import { useState } from "react";
import { GatewayFactoryABI__factory } from "../../types/ethers";

const DeployerContainer = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const iface = new ethers.Interface(GATEWAY_FACTORY_CONTRACT_ABI);

  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deployedContractAddress, setDeployedContractAddress] = useState<
    string | undefined
  >(undefined);

  if (!isConnected || !address || !walletProvider) {
    return <Web3ConnectButton />;
  }

  const handleClickDeployButton = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      const gatewayContract = GatewayFactoryABI__factory.connect(
        GATEWAY_FACTORY_CONTRACT_ADDRESS,
        signer
      );

      const deployTx = await gatewayContract.deployGateway(address);

      const receipt = await deployTx.wait();

      const deployedEventLog = receipt?.logs
        .map((log) => iface.parseLog(log))
        .find((parsedLog) => parsedLog?.name === "GatewayDeployed");

      const deployedAddress = deployedEventLog
        ? deployedEventLog.args.gatewayAddr
        : undefined;

      setDeployedContractAddress(deployedAddress);
    } catch (e) {
      console.log("Error:", e);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DeployerComponent
      deployedContractAddress={deployedContractAddress}
      isLoading={isLoading}
      error={error}
      onClickDeployButton={handleClickDeployButton}
    />
  );
};

export default DeployerContainer;

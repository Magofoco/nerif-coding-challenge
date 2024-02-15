import DeployerComponent from "../../components/DeployerComponent";
import { GATEWAY_FACTORY_CONTRACT_ADDRESS } from "../../blockchain/contractAddresses";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import Web3ConnectButton from "../Web3Connect";
import { GatewayFactoryABI__factory } from "../../types/ethers";
import { ethers } from "ethers";
import { useState } from "react";

const { REACT_APP_INFURA_API_KEY } = process.env;

const DeployerContainer = () => {
  const [error, setError] = useState<undefined | string>(undefined);

  const provider = new ethers.InfuraProvider(
    "matic-mumbai",
    REACT_APP_INFURA_API_KEY
  );

  const { address } = useWeb3ModalAccount();

  const gatewayFactoryContract = GatewayFactoryABI__factory.connect(
    GATEWAY_FACTORY_CONTRACT_ADDRESS,
    provider
  );

  console.log(REACT_APP_INFURA_API_KEY);

  if (!address) {
    return <Web3ConnectButton />;
  }

  const handleClickDeployButton = async () => {
    try {
      const tx = await gatewayFactoryContract.deployGateway(address);
      await tx.wait();
    } catch (e) {
      // TODO: Handle the error gracefully
      console.log("e", e);
      setError("Something went wrong");
    }
  };

  return (
    <DeployerComponent
      error={error}
      onClickDeployButton={handleClickDeployButton}
    />
  );
};

export default DeployerContainer;

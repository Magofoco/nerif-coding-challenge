import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Web3ConnectButton from "../../containers/Web3Connect";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const Navbar: React.FC = () => {
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="#E8F5FE"
      color="white"
    >
      {/* Left side: Logo */}
      <Box>
        <img src={"logo"} alt="Logo" height="30px" />
      </Box>

      <Box>
        {isConnected && address && (
          <Box display="inline" marginRight="1rem">
            {address}
          </Box>
        )}
        <Web3ConnectButton />
      </Box>
    </Flex>
  );
};

export default Navbar;

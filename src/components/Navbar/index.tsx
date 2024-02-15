import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Web3ConnectButton from "../../containers/Web3Connect";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { getTruncatedAddress } from "../../utils/getTruncatedAddress";
import logoSVG from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { address, isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  return (
    <Flex as="nav" align="center" justify="space-between" padding="1rem">
      <Box _hover={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <img src={logoSVG} alt="Logo" height="30px" />
      </Box>

      <Flex alignItems="center">
        <Box>
          {isConnected && address && (
            <Box display="inline" marginRight="1rem">
              {getTruncatedAddress(address)}
            </Box>
          )}
          <Web3ConnectButton />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;

import { Box } from "@chakra-ui/react";
import DeployerContainer from "../DeployerContainer";

const Homepage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <DeployerContainer />
    </Box>
  );
};

export default Homepage;

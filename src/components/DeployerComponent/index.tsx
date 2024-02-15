import { Alert, AlertIcon, Box, Button, Text } from "@chakra-ui/react";

interface DeployerComponentProps {
  deployedContractAddress: string | undefined;
  isLoading: boolean;
  error: string | undefined;
  onClickDeployButton: () => void;
}

const DeployerComponent: React.FC<DeployerComponentProps> = ({
  deployedContractAddress,
  isLoading,
  error,
  onClickDeployButton,
}) => {
  return (
    <Box>
      {deployedContractAddress && (
        <Text mb={4}>Deployed Contract Address: {deployedContractAddress}</Text>
      )}
      <Button
        onClick={onClickDeployButton}
        disabled={isLoading}
        isLoading={isLoading}
        variant="default"
      >
        {isLoading ? <>Deploying...</> : "Deploy new gateway"}
      </Button>
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default DeployerComponent;

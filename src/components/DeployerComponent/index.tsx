import { Alert, AlertIcon, Box, Button, Text, Flex } from "@chakra-ui/react"; // Import Flex

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
      <Flex alignItems="center" mb={4} justifyContent="space-between">
        <Flex alignItems="center" flex="1">
          {deployedContractAddress && (
            <>
              <Text mr={2}>Deployed Contract Address:</Text>
              <Text fontWeight="bold">{deployedContractAddress}</Text>
            </>
          )}
        </Flex>
        <Button
          onClick={onClickDeployButton}
          disabled={isLoading}
          isLoading={isLoading}
          variant="default"
          ml={deployedContractAddress ? 4 : 0}
        >
          {isLoading ? <>Deploying...</> : "Deploy new gateway"}
        </Button>
      </Flex>
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

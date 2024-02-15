import { Alert, AlertIcon, Box, Button, Spinner } from "@chakra-ui/react";

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
      {deployedContractAddress}
      <Button onClick={onClickDeployButton} disabled={isLoading}>
        {isLoading ? (
          <>
            <Spinner size="sm" mr={2} />
            Deploying...
          </>
        ) : (
          "Deploy new gateway"
        )}
      </Button>
      {error && (
        <Alert status="error" mt={8}>
          <AlertIcon />
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default DeployerComponent;

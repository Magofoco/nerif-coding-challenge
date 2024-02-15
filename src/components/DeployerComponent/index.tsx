import { Alert, AlertIcon, Box, Button } from "@chakra-ui/react";

interface DeployerComponentProps {
  error: string | undefined;
  onClickDeployButton: () => void;
}

const DeployerComponent: React.FC<DeployerComponentProps> = ({
  error,
  onClickDeployButton,
}) => {
  return (
    <Box>
      <Button onClick={onClickDeployButton}>Deploy new gateway</Button>
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

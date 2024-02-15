import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="xl" mt={3} mb={2}>
        The page does not exist
      </Text>
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </Box>
  );
};

export default ErrorPage;

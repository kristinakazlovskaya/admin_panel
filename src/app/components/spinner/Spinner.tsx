import React from "react";
import { Box, Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner: React.FC = () => {
  return (
    <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
      <ChakraSpinner color="teal.500" size="xl" />
    </Box>
  );
};

export default Spinner;

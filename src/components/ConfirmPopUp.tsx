import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useState } from "react";
import signUp from "../pages/signup";

export default function Success() {
  return (
    <Box
      textAlign="center"
      mt={"200px"}
      color={"green.200"}
      position={"absolute"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
    >
      <Spinner color="green" size={"xl"} thickness={"3px"} />
      <Heading as="h4" color={"green.700"} size="lg" mt={6} mb={2}>
        Yönlendiriliyorsunuz ...
      </Heading>
    </Box>
  );
}

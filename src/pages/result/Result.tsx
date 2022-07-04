import { Box, Heading } from "@chakra-ui/react";
import { ResultCard } from "../../components/result-card/ResultCard";

export const Result = () => {
  return (
    <Box textAlign="center" maxW="40rem" m="1rem auto">
      <Heading m="2rem 0">Result</Heading>
      <Heading as="h4" size="md">
        Congrats! You Passed 🚀 Score 80/100
      </Heading>
      <ResultCard />
    </Box>
  );
};

import { Box, Heading } from "@chakra-ui/react";
import { QuestionCard } from "../../components/question-card/QuestionCard";

export const Quiz = () => {
  return (
    <Box>
      <Heading textAlign="center" mt="4rem">
        A11y Basics quiz
      </Heading>
      <QuestionCard />
    </Box>
  );
};

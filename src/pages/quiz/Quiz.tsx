import { Box, Flex, Heading } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";
import { QuestionCard } from "../../components/question-card/QuestionCard";

export const Quiz = () => {
  const selectedOption = useAppSelector((state) => state.quiz.selectedQuiz);
  const currentQuiz = useAppSelector((state) => state.quiz.currentQuiz);
  if (selectedOption === "") {
    return (
      <Flex h="90vh" justifyContent="center" alignItems="center">
        You landed in wrong place
      </Flex>
    );
  }
  return (
    <Box>
      <Heading textAlign="center" mt="4rem">
        {currentQuiz?.spacedName} Quiz
      </Heading>
      <QuestionCard />
    </Box>
  );
};

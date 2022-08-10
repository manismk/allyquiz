import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { ResultCard } from "../../components/result-card/ResultCard";
import { calculateScores } from "../../utils/calculateScore";

export const Result = () => {
  const selectedOption = useAppSelector((state) => state.quiz.selectedQuiz);
  const userSelection = useAppSelector((state) => state.quiz.userSelection);

  const [resultPercent, setResultPercent] = useState(0);

  useEffect(() => {
    const score = calculateScores(userSelection);
    setResultPercent(score);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  if (selectedOption === "") {
    return (
      <Flex h="90vh" justifyContent="center" alignItems="center">
        You landed in wrong place
      </Flex>
    );
  }
  return (
    <Box textAlign="center" maxW="40rem" m="1rem auto">
      <Heading m="2rem 0">Result</Heading>
      <Heading as="h4" size="md">
        {resultPercent >= 60
          ? `Congrats! You Passed 🚀 Score ${resultPercent}/100`
          : `Aww! 😞 Keep learning about Accessibility. Score ${resultPercent}/100`}
      </Heading>
      <ResultCard />
    </Box>
  );
};

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { quitQuiz, quizAnswerHandler } from "../../features/quiz/quizSlice";
import { QuizOption } from "../quiz-option/QuizOption";

export const QuestionCard = () => {
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const answerClickHandler = (quesNo: number) => {
    const nextQuestion =
      currentQuestion?.questionNo && currentQuestion?.questionNo + 1;
    dispatch(quizAnswerHandler(nextQuestion));
  };

  return (
    <Box m="3rem auto" maxW="40rem" boxShadow="lg" p="2rem">
      <Flex justifyContent="space-between" alignItems="center">
        <Text>
          Question: <Text as="b">{currentQuestion?.questionNo}/5</Text>
        </Text>
        <Text
          borderRadius="50%"
          p="3px"
          w="2rem"
          h="2rem"
          textAlign="center"
          border="3px solid"
          borderColor="primary.dark"
          fontSize="0.9rem"
        >
          30
        </Text>
        <Button
          variant="outline"
          size="sm"
          bg="red.100"
          color="black"
          _hover={{ bg: "red.100" }}
          onClick={() => {
            dispatch(quitQuiz());
            navigate("/");
          }}
        >
          Quit
        </Button>
      </Flex>
      <Text p="2rem 0">
        {`${currentQuestion?.questionNo}. ${currentQuestion?.question}`}
      </Text>
      <Flex flexDirection="column" gap="0.5rem">
        {currentQuestion?.options.map((option, index) => {
          return (
            <QuizOption
              key={index}
              option={option.option}
              isRight={option.isRight}
              clickHandler={answerClickHandler}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

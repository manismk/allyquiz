import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  moveToNextquestion,
  quitQuiz,
  quizAnswerHandler,
} from "../../features/quiz/quizSlice";
import { QuizOption } from "../quiz-option/QuizOption";

export const QuestionCard = () => {
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((time) => {
        if (time <= 0) {
          clearInterval(interval);
          console.log("in", time);
          const questionNo =
            currentQuestion?.questionNo && currentQuestion?.questionNo;
          const correctOptionNo = currentQuestion?.options.find(
            (option) => option.isRight
          )?.optionNo;
          dispatch(
            quizAnswerHandler({
              questionNo,
              userSelecetedOptionNo: 0,
              correctOptionNo,
              isUserChoiceRight: false,
            })
          );
          if (questionNo && questionNo <= 4) {
            dispatch(moveToNextquestion(questionNo));
          } else {
            navigate("/result");
          }
          return 30;
        } else {
          return time - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestion]);

  useEffect(() => {
    setTimer(30);
  }, [currentQuestion]);

  const answerClickHandler = (userSelecetedOptionNo: number) => {
    const questionNo =
      currentQuestion?.questionNo && currentQuestion?.questionNo;
    const correctOptionNo = currentQuestion?.options.find(
      (option) => option.isRight
    )?.optionNo;
    const isUserChoiceRight = correctOptionNo === userSelecetedOptionNo;
    dispatch(
      quizAnswerHandler({
        questionNo,
        userSelecetedOptionNo,
        correctOptionNo,
        isUserChoiceRight,
      })
    );
    if (questionNo && questionNo <= 4) {
      dispatch(moveToNextquestion(questionNo));
    } else {
      navigate("/result");
    }
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
          {timer}
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
              optionNo={option.optionNo}
              clickHandler={answerClickHandler}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  moveToNextquestion,
  quitQuiz,
  quizAnswerHandler,
} from "../../features/quiz/quizSlice";
import { addScore } from "../../services/addScore";
import { calculateScores } from "../../utils/calculateScore";
import { QuizOption } from "../quiz-option/QuizOption";

export const QuestionCard = () => {
  const currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);
  const userSelection = useAppSelector((state) => state.quiz.userSelection);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [border, setBorder] = useState(100);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
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
        const scores = calculateScores(userSelection);
        addScore(scores, userSelection, user!);
        navigate("/result", { replace: true });
      }
    }
  }, [timer]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTimer(30);
  }, [currentQuestion]);

  useEffect(() => {
    setBorder((timer / 30) * 100);
  }, [timer]);

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
      const scores = calculateScores(userSelection);
      addScore(scores, userSelection, user!);
      navigate("/result", { replace: true });
    }
  };

  return (
    <Box m="3rem auto" maxW="40rem" boxShadow="lg" p="2rem">
      <Flex justifyContent="space-between" alignItems="center">
        <Text>
          Question: <Text as="b">{currentQuestion?.questionNo}/5</Text>
        </Text>
        <CircularProgress value={border} color="primary.dark" thickness="7px">
          <CircularProgressLabel fontSize="16px">{timer}</CircularProgressLabel>
        </CircularProgress>
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

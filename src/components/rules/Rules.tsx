import {
  Box,
  Button,
  Heading,
  IconButton,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { startQuiz } from "../../features/quiz/quizSlice";

type RulesProp = {
  selectedOption: string;
  handleBack: React.MouseEventHandler<HTMLButtonElement>;
};

export const Rules = ({ selectedOption, handleBack }: RulesProp) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const startQuizHandler = () => {
    dispatch(startQuiz(selectedOption));
    navigate("/quiz");
  };

  return (
    <Box maxW="25rem" m="5rem auto" boxShadow="lg" borderRadius="10px" p="2rem">
      <IconButton
        aria-label="Back to home"
        pos="absolute"
        icon={<FaArrowLeft />}
        onClick={handleBack}
      ></IconButton>
      <Heading textAlign="center">Rules</Heading>
      <OrderedList spacing="3" m="2rem 0">
        <ListItem>The quiz will contain 5 questions</ListItem>
        <ListItem>You have to answer the question within 30 sec</ListItem>
        <ListItem>For every right answer you will gave 4 points</ListItem>
        <ListItem>For every wrong answer you will lose 1 point</ListItem>
        <ListItem>
          If all the questions answered correctly you will earn the badge
        </ListItem>
      </OrderedList>
      <Box textAlign="center">
        <Button
          variant="ghost"
          bg="primary.dark"
          color="black"
          _hover={{
            bg: "primary.light",
          }}
          onClick={startQuizHandler}
        >
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};

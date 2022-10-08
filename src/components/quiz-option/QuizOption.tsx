import { Button } from "@chakra-ui/react";

type quizOptionProps = {
  option: string;
  isRight: Boolean;
  clickHandler: Function;
  optionNo: number;
};

export const QuizOption = ({
  option,
  isRight,
  clickHandler,
  optionNo,
}: quizOptionProps) => {
  return (
    <Button
      whiteSpace="unset"
      h="unset"
      display="inline-block"
      p="0.8rem"
      bg="primary.light"
      _hover={{ bg: "primary.dark" }}
      color="black"
      onClick={() => clickHandler(optionNo)}
      textTransform="capitalize"
    >
      {option}
    </Button>
  );
};

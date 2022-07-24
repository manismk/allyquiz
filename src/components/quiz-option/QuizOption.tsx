import { Button } from "@chakra-ui/react";

type quizOptionProps = {
  option: string;
  isRight: Boolean;
  clickHandler: Function;
};

export const QuizOption = ({
  option,
  isRight,
  clickHandler,
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
      onClick={() => clickHandler(2)}
    >
      {option}
    </Button>
  );
};

import { Box, Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../app/hooks";

export const ResultCard = () => {
  const userSelection = useAppSelector((state) => state.quiz.userSelection);
  const currentQuizQuestions = useAppSelector(
    (state) => state.quiz.currentQuizQuestions
  );

  return (
    <Flex textAlign="left" flexDirection="column" gap="1rem" mt="2rem">
      {userSelection.userAnswers.map((usrSel) => {
        const currQuestion = currentQuizQuestions?.find(
          (ques) => ques.questionNo === usrSel.questionNo
        );
        return (
          <Box boxShadow="lg" p="2rem" key={usrSel.questionNo}>
            <Text p="1rem 0">
              {`${currQuestion?.questionNo}. ${currQuestion?.question}`}
            </Text>
            <Flex flexDirection="column" gap="0.5rem">
              {currQuestion?.options.map((currOpt) => {
                return (
                  <Text
                    p="1rem"
                    bg={` ${
                      usrSel.userSelecetedOptionNo === currOpt.optionNo
                        ? usrSel.isUserChoiceRight
                          ? "green.200"
                          : "red.200"
                        : currOpt.isRight
                        ? "green.200"
                        : "primary.light"
                    }`}
                    key={currOpt.optionNo}
                    color="black"
                    borderRadius="10px"
                  >
                    {currOpt.option}
                  </Text>
                );
              })}
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

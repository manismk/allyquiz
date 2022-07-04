import { Box, Flex, Text } from "@chakra-ui/react";
import { QuizOption } from "../quiz-option/QuizOption";

export const ResultCard = () => {
  return (
    <Box textAlign="left" boxShadow="lg" p="2rem" mt="2rem">
      <Text p="2rem 0">
        1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
        alias nisi, consectetur sunt vero praesentium odio reprehenderit ea
        ducimus suscipit recusandae mollitia eos non facilis officia laboriosam
        fugit beatae. Blanditiis?
      </Text>
      <Flex flexDirection="column" gap="0.5rem">
        <QuizOption />
        <QuizOption />
        <QuizOption />
      </Flex>
    </Box>
  );
};

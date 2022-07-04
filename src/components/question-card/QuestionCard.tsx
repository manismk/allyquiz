import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { QuizOption } from "../quiz-option/QuizOption";

export const QuestionCard = () => {
  return (
    <Box m="3rem auto" maxW="40rem" boxShadow="lg" p="2rem">
      <Flex justifyContent="space-between" alignItems="center">
        <Text>
          Question: <Text as="b">1/5</Text>
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
        >
          Quit
        </Button>
      </Flex>
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

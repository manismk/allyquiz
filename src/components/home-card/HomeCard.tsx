import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { quizType } from "../../data/quiz";

type HomeCardProps = {
  clickHandler: React.MouseEventHandler<HTMLDivElement>;
  quiz: quizType;
};

export const HomeCard = ({ clickHandler, quiz }: HomeCardProps) => {
  return (
    <Flex
      flexDirection="column"
      maxW="20rem"
      shadow="md"
      cursor="pointer"
      borderRadius="10px"
      transition="0.5s transform"
      _hover={{ transform: "scale(0.95)" }}
      onClick={clickHandler}
    >
      <Image
        src={`${process.env.PUBLIC_URL}/assets/${quiz.name}.png`}
        alt=""
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
      />
      <Box p="1rem">
        <Heading as="h4" size="lg">
          {quiz.spacedName}
        </Heading>
        <Text p="0.5rem 0" lineHeight="1.2">
          Take the test to test your accessbility {quiz.shortName} knowledge
        </Text>
        <Text p="0.25rem 0" lineHeight="1.2" fontWeight="600">
          {quiz.questions.length} Questions
        </Text>
      </Box>
    </Flex>
  );
};

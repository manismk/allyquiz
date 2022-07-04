import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export const HomeCard = () => {
  return (
    <Flex
      flexDirection="column"
      maxW="20rem"
      shadow="md"
      cursor="pointer"
      borderRadius="10px"
      transition="0.5s transform"
      _hover={{ transform: "scale(0.95)" }}
    >
      <Image
        src="https://jsquizz.netlify.app/asset/js.png"
        alt=""
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
      />
      <Box p="1rem">
        <Heading as="h4" size="lg">
          Ally bascis
        </Heading>
        <Text p="0.5rem 0" lineHeight="1.2">
          Take the test to test your accessbility basics knowledge
        </Text>
        <Text p="0.25rem 0" lineHeight="1.2" fontWeight="600">
          5 Questions
        </Text>
      </Box>
    </Flex>
  );
};

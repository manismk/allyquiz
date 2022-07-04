import { Flex, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Navbar = () => {
  return (
    <Flex
      bg="primary.dark"
      justifyContent="space-between"
      alignItems="center"
      p="1rem 2rem"
      color="black"
      pos="sticky"
      w="100%"
      top="0"
    >
      <Text fontWeight="600" fontSize="1.2rem">
        A11y Quiz
      </Text>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

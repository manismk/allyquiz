import { background, Box, Button, Heading, Image } from "@chakra-ui/react";
import loginSvg from "../../assets/login.svg";
import googleSvg from "../../assets/google.svg";

export const Login = () => {
  return (
    <Box
      p="2rem"
      boxShadow="lg"
      maxWidth="30rem"
      margin="4rem auto"
      textAlign="center"
    >
      <Heading as="h3">A11y Quiz</Heading>
      <Box m="2rem 0">
        <Image src={loginSvg}></Image>
      </Box>
      <Button
        loadingText="Logging in..."
        isLoading={false}
        backgroundColor="primary.light"
        _hover={{ background: "primary.dark" }}
        leftIcon={<Image src={googleSvg} w="1.5rem"></Image>}
      >
        Login with Google
      </Button>
    </Box>
  );
};

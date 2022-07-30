import {
  Box,
  Button,
  createStandaloneToast,
  Heading,
  Image,
} from "@chakra-ui/react";
import loginSvg from "../../assets/login.svg";
import googleSvg from "../../assets/google.svg";
import { handleGoogleSignIn } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useAppDispatch();
  const { loginLoading: isLoading, error: loginError } = useAppSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = createStandaloneToast();
  useEffect(() => {
    if (loginError !== "") {
      toast({
        description: loginError,
        duration: 3000,
        status: "error",
        isClosable: true,
        position: "bottom-left",
      });
    }
  }, [loginError]);

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
        isLoading={isLoading}
        backgroundColor="primary.light"
        _hover={{ background: "primary.dark" }}
        leftIcon={<Image src={googleSvg} w="1.5rem"></Image>}
        onClick={() => dispatch(handleGoogleSignIn({ navigate, location }))}
      >
        Login with Google
      </Button>
    </Box>
  );
};

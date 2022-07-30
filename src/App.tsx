import { ChakraProvider, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";

import { Navbar } from "./components/navbar/Navbar";
import { setUser } from "./features/auth/authSlice";
import { auth } from "./firebase";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Quiz } from "./pages/quiz/Quiz";
import { Result } from "./pages/result/Result";
import { theme } from "./theme";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(JSON.parse(JSON.stringify(user))));
      } else {
        dispatch(setUser(false));
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <Box m="1rem 2rem">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

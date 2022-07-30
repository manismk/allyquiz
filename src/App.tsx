import { ChakraProvider, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";

import { Navbar } from "./components/navbar/Navbar";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { setUser } from "./features/auth/authSlice";
import { auth } from "./firebase";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Quiz } from "./pages/quiz/Quiz";
import { Result } from "./pages/result/Result";
import { theme } from "./theme";

export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(JSON.parse(JSON.stringify(user))));
        navigate("/");
      } else {
        dispatch(setUser(false));
      }
    });

    return () => unsubscribe();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <Box m="1rem 2rem">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </Route>
          </Routes>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

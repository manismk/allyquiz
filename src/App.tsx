import { ChakraProvider, Box } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import { Navbar } from "./components/navbar/Navbar";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import { setUser } from "./features/auth/authSlice";
import { auth } from "./firebase";
import { Home } from "./pages/home/Home";
import { Leaderboard } from "./pages/leaderboard/Leaderboard";
import { Login } from "./pages/login/Login";
import { Profile } from "./pages/profile/Profile";
import { Quiz } from "./pages/quiz/Quiz";
import { Result } from "./pages/result/Result";
import { addScore } from "./services/addScore";
import { theme } from "./theme";
import { calculateScores } from "./utils/calculateScore";

export const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userSelection = useAppSelector((state) => state.quiz.userSelection);

  const { user } = useAppSelector((state) => state.auth);

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

  useEffect(() => {
    if (userSelection.userAnswers.length === 5) {
      const scores = calculateScores(userSelection);
      addScore(scores, userSelection, user as User);
    }
  }, [userSelection, user]);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <Box m="1rem 2rem">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/:userId" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
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

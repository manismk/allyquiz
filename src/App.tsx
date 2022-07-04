import { ChakraProvider, Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar/Navbar";
import { Rules } from "./components/rules/Rules";
import { Home } from "./pages/home/Home";
import { Quiz } from "./pages/quiz/Quiz";
import { Result } from "./pages/result/Result";
import { theme } from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Navbar />
      <Box m="1rem 2rem">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Box>
    </Box>
  </ChakraProvider>
);

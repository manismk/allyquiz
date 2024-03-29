import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { HomeCard } from "../../components/home-card/HomeCard";
import { Rules } from "../../components/rules/Rules";
import { quitQuiz } from "../../features/quiz/quizSlice";

export const Home = () => {
  const [resultItems, setResultitems] = useState({
    isResultShown: false,
    selectedOption: "",
  });
  const quizes = useAppSelector((state) => state.quiz.quizes);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(quitQuiz());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!resultItems.isResultShown ? (
        <>
          <Heading textAlign="center" m="5rem 1rem">
            Are you the developer who cares about Inclusive web?
            <br />
            Let's test your accessbility knowledge
          </Heading>
          <Flex
            gap="3rem"
            m="0 1rem"
            mb="2rem"
            justifyContent="center"
            flexWrap="wrap"
          >
            {quizes.quiz.map((curQuiz) => (
              <HomeCard
                quiz={curQuiz}
                key={curQuiz.name}
                clickHandler={() =>
                  setResultitems((prev) => ({
                    ...prev,
                    isResultShown: true,
                    selectedOption: `${curQuiz.name}`,
                  }))
                }
              />
            ))}
          </Flex>
        </>
      ) : (
        <Rules
          selectedOption={resultItems.selectedOption}
          handleBack={() =>
            setResultitems((prev) => ({
              ...prev,
              isResultShown: false,
              selectedOption: "",
            }))
          }
        />
      )}
    </>
  );
};

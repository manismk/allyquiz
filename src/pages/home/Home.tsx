import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { HomeCard } from "../../components/home-card/HomeCard";
import { Rules } from "../../components/rules/Rules";

export const Home = () => {
  const [resultItems, setResultitems] = useState({
    isResultShown: false,
    selectedOption: "",
  });
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
            <HomeCard
              clickHandler={() =>
                setResultitems((prev) => ({
                  ...prev,
                  isResultShown: true,
                  selectedOption: "basic",
                }))
              }
            />
            <HomeCard
              clickHandler={() =>
                setResultitems((prev) => ({
                  ...prev,
                  isResultShown: true,
                  selectedOption: "pro",
                }))
              }
            />
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

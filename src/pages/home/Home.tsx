import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { HomeCard } from "../../components/home-card/HomeCard";
import { Rules } from "../../components/rules/Rules";

export const Home = () => {
  const [resultItems, setResultitems] = useState({
    isResultShown: false,
    selectedOption: "",
  });

  const state = useAppSelector((state) => state);
  console.log("initialState", state);
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
                  selectedOption: "ally-basic",
                }))
              }
            />
            <HomeCard
              clickHandler={() =>
                setResultitems((prev) => ({
                  ...prev,
                  isResultShown: true,
                  selectedOption: "ally-pro",
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

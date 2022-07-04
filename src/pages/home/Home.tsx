import { Flex, Heading } from "@chakra-ui/react";
import { HomeCard } from "../../components/home-card/HomeCard";

export const Home = () => {
  return (
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
        <HomeCard />
        <HomeCard />
      </Flex>
    </>
  );
};

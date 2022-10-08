import {
  Box,
  Flex,
  Heading,
  Tr,
  Tbody,
  Table,
  TableContainer,
  Th,
  Td,
  Thead,
  Text,
  Spinner,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

type scoreType = {
  quiz: {
    name: string;
    type: string;
  };
  score: number;
  user: {
    uid: string;
    name: string;
    photoUrl: string;
  };
  timeTaken: Date;
};

type scoresType = {
  scores: scoreType[] | [];
};

export const Leaderboard = () => {
  const [isLoading, setLoading] = useState(false);
  const [scoreData, setScoreData] = useState<scoresType>({
    scores: [],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    let unsubscribe: Function;
    try {
      setLoading(true);
      const q = query(
        collection(db, "scores"),
        where("score", ">=", 60),
        orderBy("score", "desc")
      );
      unsubscribe = onSnapshot(q, (querySnapshot) => {
        const allScores: scoreType[] = [];
        querySnapshot.forEach((doc) => {
          allScores.push(doc.data() as scoreType);
        });
        setLoading(false);
        setScoreData((prev) => ({ ...prev, scores: allScores }));
      });
    } catch (error) {
      setLoading(false);
      setError("error");
    }
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <Box textAlign="center" m="3rem auto">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="primary.light"
          color="primary.dark"
          size="xl"
        />
      </Box>
    );
  }
  if (error === "error") {
    return <Box textAlign="center"> Something went wrong. Try again later</Box>;
  }

  return (
    <Flex
      m="3rem auto"
      maxW="40rem"
      boxShadow="lg"
      p="2rem"
      flexDirection="column"
      alignItems="center"
      gap="1rem"
    >
      <Heading as="h2">Leaderboard</Heading>
      {scoreData.scores.length > 0 ? (
        <>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr textAlign="center">
                  <Th textAlign="center" px="1rem">
                    S.No
                  </Th>
                  <Th textAlign="center" px="1rem">
                    Name
                  </Th>
                  <Th textAlign="center" px="1rem">
                    Score
                  </Th>
                  <Th textAlign="center" px="1rem">
                    Test Name
                  </Th>
                  <Th textAlign="center" px="1rem">
                    Test Taken Time
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {scoreData.scores.map((test, index) => (
                  <Tr key={index}>
                    <Td px="1rem" textAlign="center">
                      {index + 1}
                    </Td>
                    <Td px="1rem" textAlign="center">
                      <Link to={`/user/${test.user.uid}`}>
                        <Flex gap="5px" alignItems="center">
                          <Avatar
                            size="xs"
                            name={test.user.name}
                            src={test.user.photoUrl}
                          />
                          <Text>{test.user.name}</Text>
                        </Flex>
                      </Link>
                    </Td>
                    <Td px="1rem" textAlign="center">
                      {test.score}
                    </Td>

                    <Td px="1rem" textAlign="center">
                      {test.quiz.name}
                    </Td>
                    <Td px="1rem" textAlign="center">
                      <Tooltip
                        label={moment(test.timeTaken).format(
                          "DD/MM/YY,h:mm:ss a"
                        )}
                        hasArrow
                        placement="top"
                      >
                        <Box>{moment(test.timeTaken).format("DD-MMM-YY")}</Box>
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Text>No Took Test</Text>
      )}
    </Flex>
  );
};

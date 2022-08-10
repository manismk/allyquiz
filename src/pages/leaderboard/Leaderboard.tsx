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
                <Tr>
                  <Th>S.No</Th>
                  <Th>Name</Th>
                  <Th>Score</Th>
                  <Th>Test Name</Th>
                  <Th>Test Taken Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {scoreData.scores.map((test, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>
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
                    <Td>{test.score}</Td>

                    <Td>{test.quiz.name}</Td>
                    <Td>
                      {moment(test.timeTaken).format("DD/MM/YY,h:mm:ss a")}
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

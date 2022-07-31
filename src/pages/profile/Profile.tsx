import {
  Avatar,
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
  Tooltip,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

type testType = {
  quiz: {
    name: string;
    type: string;
  };
  score: number;
  sid: string;
  timeTaken: Date;
};

type userDataType = {
  user: User | undefined;
  tests: testType[] | [];
};

export const Profile = () => {
  const { userId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [userData, setUserData] = useState<userDataType>({
    user: undefined,
    tests: [],
  });
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "users", userId!);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLoading(false);
          setUserData((prev) => ({
            ...prev,
            user: docSnap.data().user as User,
            tests: docSnap.data().tests as testType[],
          }));
        } else {
          setLoading(false);
          setError("user");
        }
      } catch (error) {
        setLoading(false);
        setError("error");
      }
    })();
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
  if (error === "user") {
    return <Box textAlign="center"> User not found</Box>;
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
      <Avatar
        size="xl"
        name={userData.user?.displayName || undefined}
        src={userData.user?.photoURL || undefined}
      />
      <Heading as="h2">{userData.user?.displayName}</Heading>
      {userData.tests.length > 0 ? (
        <>
          <Heading as="h4" size="lg">
            Tests Taken
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>S.No</Th>
                  <Th>Test Name</Th>
                  <Th>Score</Th>
                  <Th>Test Taken Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {userData.tests.map((test, index) => (
                  <Tr key={test.sid}>
                    <Td>{index + 1}</Td>
                    <Td>{test.quiz.name}</Td>
                    <Td>{test.score}</Td>
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
        <Text>No Tests Taken</Text>
      )}
    </Flex>
  );
};

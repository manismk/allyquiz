import {
  Avatar,
  Button,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { BiLogIn } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Flex
      bg="primary.dark"
      justifyContent="space-between"
      alignItems="center"
      p="1rem 2rem"
      color="black"
      pos="sticky"
      w="100%"
      top="0"
    >
      <Link to="/">
        <Text fontWeight="600" fontSize="1.2rem">
          A11y Quiz
        </Text>
      </Link>
      <Flex alignItems="center" gap="1rem">
        <ColorModeSwitcher />
        {user ? (
          <Flex flexDirection="column" alignItems="center">
            <Popover>
              <PopoverTrigger>
                <Button
                  p="0"
                  minW="unset"
                  h="unset"
                  background="transparent"
                  _hover={{ background: "transparent" }}
                >
                  <Avatar
                    size="sm"
                    name={user.displayName || undefined}
                    src={user.photoURL || undefined}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent w="6.5rem">
                <PopoverArrow />
                <PopoverBody>
                  <Button
                    background="primary.light"
                    _hover={{ background: "primary.light" }}
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          // Sign-out successful.
                        })
                        .catch((error) => {});
                    }}
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        ) : (
          <Link to="/login">
            <Flex flexDirection="column" alignItems="center">
              <Icon as={BiLogIn} fontSize="2rem" />
            </Flex>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

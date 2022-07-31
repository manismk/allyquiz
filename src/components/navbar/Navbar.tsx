import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
      zIndex="5"
    >
      <Link to="/">
        <Text fontWeight="600" fontSize="1.2rem">
          A11y Quiz
        </Text>
      </Link>
      <Flex alignItems="center" gap="1rem">
        <ColorModeSwitcher />
        {user ? (
          <Menu>
            <MenuButton
              p="2"
              transition="all 0.2s"
              as={IconButton}
              background="primary.light"
              _hover={{ backgroundColor: "primary.light" }}
              rightIcon={<ChevronDownIcon />}
            >
              <Avatar
                size="sm"
                name={user.displayName || undefined}
                src={user.photoURL || undefined}
              />
            </MenuButton>

            <MenuList>
              <MenuItem
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {});
                }}
              >
                Logout
              </MenuItem>
              <Link to={`/user/${user.uid}`}>
                <MenuItem>My profile</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        ) : (
          <Tooltip label="Login" hasArrow>
            <Link to="/login">
              <Flex flexDirection="column" alignItems="center">
                <Icon as={BiLogIn} fontSize="2rem" />
              </Flex>
            </Link>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
};

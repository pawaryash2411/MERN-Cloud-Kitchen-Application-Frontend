import { useAuth0 } from "@auth0/auth0-react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Header() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log("use", user);

  return (
    <>
      <Navbar className="bg-transparent">
        <NavbarBrand>
          <img
            src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/5542765a-126d-4456-93c8-d41ec129d81b.png"
            className="h-[4rem] w-[5rem] text-white"
          />
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem isActive>
            <Link
              className="text-lg text-purple-700 hover:text-purple-500 ease-in-out duration-200"
              to="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              className="text-lg text-purple-700 hover:text-purple-500 ease-in-out duration-200"
              to="/"
            >
              Menu
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              className="text-lg text-purple-700 hover:text-purple-500 ease-in-out duration-200"
              to="/"
            >
              About
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          {isAuthenticated ? (
            <>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src={
                      user?.picture ? (
                        user?.picture
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      )
                    }
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    className="h-14 gap-2"
                    color="secondary"
                  >
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{user?.email}</p>
                  </DropdownItem>
                  <DropdownItem
                    className="flex flex-row justify-center"
                    color="secondary"
                  >
                    <Link to="/manage-restaurant">Manage Restaurant</Link>
                  </DropdownItem>
                  <DropdownItem
                    className="flex flex-row justify-center"
                    color="secondary"
                  >
                    <Link to="/add-restaurant">Add Restaurant</Link>
                  </DropdownItem>

                  <DropdownItem color="secondary">
                    <Link to="/update-profile">Update Profile</Link>
                  </DropdownItem>

                  <DropdownItem color="danger" onPress={onOpen}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          ) : (
            <>
              <Button
                className="flex justify-center gap-2 w-full rounded bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none active:bg-purple-500 sm:w-auto"
                onClick={async () => await loginWithRedirect()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                  />
                </svg>
                Login
              </Button>
            </>
          )}
        </NavbarContent>
      </Navbar>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Logout</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to Logout?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    logout();
                    toast.success("Logged out Successfully!!");
                  }}
                >
                  Logout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Header;

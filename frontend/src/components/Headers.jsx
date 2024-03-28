import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Tasks", href: "/tasks", current: false },
];

export default function Headers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const authToken = localStorage.getItem("token");
  const isAuthenticated = authToken && authToken.length > 0;

  const pathnames = location.pathname.split("/").filter((x) => x);
  const handleLogout = async () => {
    await localStorage.clear();

    // navigate
    navigate("/", { replace: true });
    window.location.reload();
  };
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            to={item.href}
                            key={item.name}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-gray-900 text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                : "text-white hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            }>
                            {item.name}
                          </NavLink>
                        ))}
                        {!isAuthenticated && (
                          <NavLink
                            to={"/login"}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-gray-900 text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                : "text-white hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            }>
                            {"Login"}
                          </NavLink>
                        )}
                        {!isAuthenticated && (
                          <NavLink
                            to={"/signup"}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-gray-900 text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                : "text-white hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            }>
                            {"Signup"}
                          </NavLink>
                        )}
                        {isAuthenticated && (
                          <button
                            onClick={onOpen}
                            to={"/logout"}
                            className="text-white hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            {"Logout"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 text-center">
                  {navigation.map((item) => (
                    <NavLink
                      to={item.href}
                      key={item.name}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gray-900 text-white hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                          : "text-white hover:bg-gray-500 hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
                      }>
                      <Disclosure.Button>{item.name}</Disclosure.Button>
                    </NavLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {pathnames.length > 0 && (
          <header className="bg-white ">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              {/* Breadcrumb Start*/}
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-sm text-gray-600 animate-slideleft">
                  <li>
                    <Link
                      to="/"
                      className="block transition hover:text-gray-700">
                      <span className="sr-only"> Home </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </Link>
                  </li>

                  {pathnames?.map((e) => (
                    <Breadcrumb e={e} key={e} />
                  ))}
                </ol>
              </nav>
            </div>
          </header>
        )}
        {/* <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            
          </div>
        </main> */}
      </div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleLogout} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

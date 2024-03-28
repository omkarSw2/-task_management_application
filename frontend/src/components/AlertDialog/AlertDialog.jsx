import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  //   AlertDialogCloseButton,
  //   useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { DeleteTodos, GETTODOS } from "../../redux/todo/todoActions";

export const AlertDialogs = ({ alertIsOpen, alertOnClose, _id }) => {
  const dispatch = useDispatch();
  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(DeleteTodos(_id));
    dispatch(GETTODOS());
    alertOnClose();
  };

  return (
    <>
      <AlertDialog isOpen={alertIsOpen} onClose={alertOnClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={alertOnClose}>Cancel</Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

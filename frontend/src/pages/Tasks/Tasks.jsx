import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETTODOS } from "../../redux/todo/todoActions";
import {
  useDisclosure,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import AddProductModal from "../../components/AddTodoModal/AddTOdoModal";

import DashboardTd from "../../components/EditModalTd/EditModalTd";
const Tasks = () => {
  const {
    isOpen: addIsOpen,
    onOpen: addOnOpen,
    onClose: addOnClose,
  } = useDisclosure();
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.todoReducer);
  console.log("todos", todos);
  React.useEffect(() => {
    dispatch(GETTODOS());
  }, []);
  return (
    <>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Button colorScheme="facebook" onClick={addOnOpen}>
          Add Product
        </Button>

        <TableContainer>
          <Table variant="simple">
            <TableCaption>Todo List </TableCaption>
            <Thead>
              <Tr>
                <Th>Todos</Th>
                <Th>description</Th>
                <Th>Due Date</Th>
                <Th>Priority</Th>
                <Th>status</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {todos?.map((renderRow) => (
                <DashboardTd
                  key={renderRow._id + renderRow.title}
                  {...renderRow}
                />
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Todos</Th>
                <Th>description</Th>
                <Th>Due Date</Th>
                <Th>Priority</Th>
                <Th>status</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </div>
      <AddProductModal
        addIsOpen={addIsOpen}
        addOnOpen={addOnOpen}
        addOnClose={addOnClose}
      />
    </>
  );
};

export default Tasks;

import {
  Select,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { GETTODOS, PostTodos } from "../../redux/todo/todoActions";

const AddProductModal = ({ addIsOpen, addOnClose }) => {
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    description: "",
    priority: 0,
    completed: false,
    due_date: "",
  };

  const [data, setData] = useState(initialState);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async () => {
    console.log(data);
    await dispatch(PostTodos(data));
    await dispatch(GETTODOS());
    addOnClose();
  };
  return (
    <>
      {/* Add modal Start */}
      <Modal
        closeOnOverlayClick={false}
        isOpen={addIsOpen}
        onClose={addOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>title</FormLabel>
              <Input
                placeholder="title"
                value={data.title}
                onChange={handlechange}
                name="title"
              />
            </FormControl>
            <FormControl>
              <FormLabel>due_date</FormLabel>
              <Input
                type="date"
                placeholder="due_date"
                value={data.due_date}
                onChange={handlechange}
                name="due_date"
              />
            </FormControl>
            <FormControl>
              <FormLabel>description</FormLabel>
              <Input
                placeholder="description"
                value={data.description}
                onChange={handlechange}
                name="description"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>priority</FormLabel>
              <Select
                variant="unstyled"
                placeholder="Select priority"
                onChange={handlechange}
                name="priority">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>completed </FormLabel>
              <Select
                variant="unstyled"
                placeholder="Select completed "
                onChange={handlechange}
                name="completed">
                <option value="true">true</option>
                <option value="false">false </option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handelSubmit}>
              Save
            </Button>
            <Button onClick={addOnClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add Modal End */}
    </>
  );
};

export default AddProductModal;

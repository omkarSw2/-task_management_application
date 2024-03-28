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
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { GETTODOS, PatchTodos } from "../../redux/todo/todoActions";

const EditProductModal = ({
  editIsOpen,
  editOnClose,
  _id,
  title,
  description,
  due_date,
  priority,
  completed,
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    _id,
    title,
    description,
    due_date,
    priority,
    completed,
  });

  const handelUpdate = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handelUpdateSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await dispatch(PatchTodos(_id, data));
    await dispatch(GETTODOS());
    editOnClose();
  };
  return (
    <>
      {/* Edit modal Start */}
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={true}
        isOpen={editIsOpen}
        onClose={editOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> Edit Todo Title</FormLabel>
              <Input
                placeholder="title"
                name="title"
                value={data.title}
                onChange={handelUpdate}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel> Edit Todo Description</FormLabel>
              <Input
                name="description"
                placeholder="description"
                value={data.description}
                onChange={handelUpdate}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Edit priority</FormLabel>
              <Select
                variant="unstyled"
                name="priority"
                value={data.priority}
                onChange={handelUpdate}
                placeholder="Select Gender">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel> Edit Status </FormLabel>
              <Select
                variant="unstyled"
                name="completed"
                value={data.completed}
                onChange={handelUpdate}
                placeholder="Select Status">
                <option value="true">True</option>
                <option value="false"> False </option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>due date</FormLabel>
              <Input
                placeholder="due_date"
                name="due_date"
                type="date"
                onChange={handelUpdate}
                value={data.due_date}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handelUpdateSubmit}>
              Save
            </Button>
            <Button onClick={editOnClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Edit Modal End */}
    </>
  );
};

export default EditProductModal;

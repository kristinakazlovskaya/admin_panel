import React, { useRef, useState } from "react";
import {
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  Button,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";

const DeleteAction: React.FC<{
  record?: Record<string, unknown>;
  onDelete: (record: any) => void;
  loading: boolean;
  alertHeading: string;
}> = ({ record, onDelete, loading, alertHeading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const [error, setError] = useState<Error | null>(null);

  const handleDeleteClick = async () => {
    try {
      await onDelete(record);
      onClose();
    } catch (err) {
      if (err instanceof Error) setError(err);
    }
  };

  if (error) return <p>Something went wrong :(</p>;

  return (
    <>
      <IconButton
        aria-label="Delete"
        icon={<Icon as={AiFillDelete} />}
        onClick={onOpen}
        bg="none"
        size="md"
        _hover={{ bg: "none" }}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {alertHeading}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                isLoading={loading}
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteAction;

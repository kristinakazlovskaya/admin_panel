import React, { useEffect, useRef } from "react";
import { useMutation } from "@apollo/client";
import {
  Icon,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { operations, Types } from "./duck";

const DeleteAction: React.FC<{ record?: Record<string, unknown> }> = ({
  record,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const [deleteAlbum, { loading, data }] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum, {
    variables: { id: String(record?.id) },
  });

  useEffect(() => {
    onClose();
  }, [data?.deleteAlbum, onClose]);

  return (
    <>
      <Icon
        mx="1"
        as={AiFillDelete}
        title="Delete album"
        onClick={onOpen}
        _hover={{ cursor: "pointer" }}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete album
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
                onClick={() => deleteAlbum()}
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

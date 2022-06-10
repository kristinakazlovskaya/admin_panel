import React from "react";
import { Icon, IconButton } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const EditAction: React.FC<{ record?: Record<string, unknown> }> = ({
  record,
}) => {
  return (
    <Link to={`${record?.id}/edit`}>
      <IconButton
        aria-label="Edit"
        icon={<Icon as={AiFillEdit} />}
        bg="none"
        size="md"
        _hover={{ bg: "none" }}
      />
    </Link>
  );
};

export default EditAction;

import React from "react";
import { Icon } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const EditAction: React.FC<{ record?: Record<string, unknown> }> = ({
  record,
}) => {
  return (
    <Link to={`../albums/${record?.id}/edit`}>
      <Icon as={AiFillEdit} title="Edit album" />
    </Link>
  );
};

export default EditAction;

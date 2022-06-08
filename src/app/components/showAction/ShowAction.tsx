import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowAction: React.FC<{ record?: Record<string, unknown> }> = ({
  record,
}) => {
  return (
    <Link to={`../albums/${record?.id}`}>
      <Icon as={FaBookOpen} title="Show album" mx="1" />
    </Link>
  );
};

export default ShowAction;

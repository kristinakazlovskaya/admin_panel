import React from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShowAction: React.FC<{ record?: Record<string, unknown> }> = ({
  record,
}) => {
  return (
    <Link to={`${record?.id}`}>
      <IconButton
        aria-label="Show"
        icon={<Icon as={FaBookOpen} />}
        bg="none"
        size="md"
        _hover={{ bg: "none" }}
      />
    </Link>
  );
};

export default ShowAction;

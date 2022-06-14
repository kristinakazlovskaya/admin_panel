import React from "react";
import { Icon, IconButton, Link } from "@chakra-ui/react";
import { HiPhotograph } from "react-icons/hi";

const ShowPhotoAction: React.FC<{ record?: Record<string, unknown> }> = ({
  record,
}) => {
  return (
    <Link isExternal href={String(record?.url)}>
      <IconButton
        aria-label="Show photo"
        icon={<Icon as={HiPhotograph} />}
        bg="none"
        size="md"
        _hover={{ bg: "none" }}
      />
    </Link>
  );
};

export default ShowPhotoAction;

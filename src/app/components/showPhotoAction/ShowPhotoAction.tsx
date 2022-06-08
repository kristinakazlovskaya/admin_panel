import React from "react";
import { Icon, Link } from "@chakra-ui/react";
import { HiPhotograph } from "react-icons/hi";

const ShowPhotoAction: React.FC<{ record?: Record<string, unknown> }> = ({
  record,
}) => {
  return (
    <Link isExternal href={String(record?.url)}>
      <Icon as={HiPhotograph} title="Show photo" mx="1" />
    </Link>
  );
};

export default ShowPhotoAction;

import React from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const BackButton: React.FC = () => {
  return (
    <Link to="..">
      <Button colorScheme="teal" leftIcon={<AiOutlineArrowLeft />}>
        Back
      </Button>
    </Link>
  );
};

export default BackButton;

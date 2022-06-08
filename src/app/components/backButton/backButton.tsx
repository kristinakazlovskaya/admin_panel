import React from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      colorScheme="teal"
      leftIcon={<AiOutlineArrowLeft />}
      onClick={() => navigate(-1)}
    >
      Back
    </Button>
  );
};

export default BackButton;

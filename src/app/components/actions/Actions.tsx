import React from "react";
import { Td } from "@chakra-ui/react";

const Actions: React.FC<{
  record?: Record<string, unknown>;
  // eslint-disable-next-line
  isActions?: boolean;
  children: React.ReactElement;
}> = ({ record, children }) => {
  return (
    <Td>
      {React.Children.map(children, (child: React.ReactElement) =>
        React.cloneElement(child, {
          record,
        })
      )}
    </Td>
  );
};

Actions.defaultProps = {
  isActions: true,
};

export default Actions;

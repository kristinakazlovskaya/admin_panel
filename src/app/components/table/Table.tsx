import React from "react";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { get } from "lodash";

const Table: React.FC<{ data: any[]; children: React.ReactElement[] }> = ({
  data,
  children,
}) => {
  return (
    <TableContainer>
      <ChakraTable>
        <Thead>
          <Tr>
            {React.Children.map(children, (child: React.ReactElement) => (
              <Th>{child.props.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((record) => (
            <Tr key={record.id}>
              {React.Children.map(children, (child: React.ReactElement) => {
                // if (child.props.isActions) {
                //   return React.cloneElement(child, {
                //     record,
                //   });
                // }

                const value = get(record, child.props.dataKey);

                return <Td>{value}</Td>;
              })}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;

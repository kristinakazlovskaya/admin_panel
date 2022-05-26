import React from "react";
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Table: React.FC = () => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Username</Th>
            <Th>Number of photos</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Vacation</Td>
            <Td>Kate</Td>
            <Td>25</Td>
            <Td>[actions]</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>University</Td>
            <Td>Max</Td>
            <Td>30</Td>
            <Td>[actions]</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>With friends</Td>
            <Td>Ethel</Td>
            <Td>10</Td>
            <Td>[actions]</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>ID</Th>
            <Th>Title</Th>
            <Th>Username</Th>
            <Th>Number of photos</Th>
          </Tr>
        </Tfoot>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;

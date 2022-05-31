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

interface TableProps {
  headers: string[];
  content: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ headers, content }) => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            {headers.map((h: string) => (
              <Th key={h}>{h}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {content.map((data: { [key: string]: any }) => {
            return (
              <Tr key={data.id}>
                {Object.values(data).map((datum) => (
                  <Td key={datum}>{datum}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            {headers.map((h: string) => (
              <Th key={h}>{h}</Th>
            ))}
          </Tr>
        </Tfoot>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;

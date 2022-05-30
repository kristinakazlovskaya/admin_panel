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

// interface TableProps {
//   headers: string[];
//   rows: [{
//     id: number;
//     data: string[];
//   }];
//   footer?: string[];
// };

const headers = ["ID", "Title", "Username", "Number of photos", ""];
const rows = [
  { id: 1, data: ["1", "Vacation", "Kate", "33", "[actions]"] },
  { id: 2, data: ["2", "Prom", "Max", "100", "[actions]"] },
  { id: 3, data: ["3", "Friends", "Mary", "15", "[actions]"] },
];

const Table: React.FC = () => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <Tr>
            {headers.map((h) => (
              <Th key={h}>{h}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => {
            return (
              <Tr key={row.id}>
                {row.data.map((datum) => (
                  <Td key={datum}>{datum}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            {headers.map((h) => (
              <Th key={h}>{h}</Th>
            ))}
          </Tr>
        </Tfoot>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;

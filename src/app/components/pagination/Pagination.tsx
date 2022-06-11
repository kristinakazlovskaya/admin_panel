import React, { useState, useMemo } from "react";
import { Button, IconButton, Select, Flex } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

const Pagination: React.FC<{ totalCount: number }> = ({ totalCount }) => {
  const [params, setParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(params.get("page")) || 1
  );
  const [pageSize, setPageSize] = useState<number>(
    Number(params.get("limit")) || 10
  );

  const pages = useMemo(
    () =>
      Array(Math.ceil(totalCount / pageSize))
        .fill("")
        .map((_, i) => 1 + i),
    [totalCount, pageSize]
  );

  const handlePageChange = (nextPage: number) => {
    setCurrentPage(nextPage);
    setParams({ page: String(nextPage), limit: String(pageSize) });
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const newPageSize = Number(event.target.value);
    setPageSize(newPageSize);
    setCurrentPage(1);
    setParams({ page: "1", limit: String(newPageSize) });
  };

  const handlePrevButtonClick = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
    setParams({ page: String(currentPage - 1), limit: String(pageSize) });
  };

  const handleNextButtonClick = () => {
    if (currentPage === pages.length) return;

    setCurrentPage(currentPage + 1);
    setParams({ page: String(currentPage + 1), limit: String(pageSize) });
  };

  return (
    <Flex gap="1" justifyContent="center" wrap="wrap">
      <Select
        size="sm"
        fontWeight="semibold"
        bg="white"
        borderRadius="md"
        w="15"
        value={pageSize}
        onChange={handlePageSizeChange}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </Select>
      <IconButton
        disabled={currentPage === 1}
        bg="none"
        size="sm"
        borderRadius="50%"
        aria-label="Previous page"
        icon={<BsChevronLeft />}
        _hover={{ bg: "teal.600", color: "white" }}
        onClick={() => handlePrevButtonClick()}
      />
      {pages.map((p: number) => (
        <Button
          key={p}
          size="sm"
          borderRadius="full"
          bg={p === currentPage ? undefined : "none"}
          colorScheme={p === currentPage ? "teal" : undefined}
          _hover={{ bg: "teal.600", color: "white" }}
          onClick={() => handlePageChange(p)}
        >
          {p}
        </Button>
      ))}
      <IconButton
        disabled={currentPage === pages.length}
        bg="none"
        size="sm"
        borderRadius="50%"
        aria-label="Next page"
        icon={<BsChevronRight />}
        _hover={{ bg: "teal.600", color: "white" }}
        onClick={() => handleNextButtonClick()}
      />
    </Flex>
  );
};

export default Pagination;

import React, { useState, useEffect } from "react";
import { Button, IconButton, Select, Flex } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface PaginationProps {
  albumsCount: number;
  setParams: (args: any) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  albumsCount,
  setParams,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    setPages(
      Array(Math.ceil(albumsCount / pageSize))
        .fill("")
        .map((_, i) => 1 + i)
    );
  }, [albumsCount, pageSize]);

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
    setCurrentPage(currentPage - 1);
    setParams({ page: currentPage - 1, limit: String(pageSize) });
  };

  const handleNextButtonClick = () => {
    setCurrentPage(currentPage + 1);
    setParams({ page: currentPage + 1, limit: String(pageSize) });
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
        bg="none"
        size="sm"
        borderRadius="50%"
        aria-label="Previous page"
        icon={<BsChevronLeft />}
        _hover={{ bg: "teal.600", color: "white" }}
        disabled={currentPage === 1}
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
        bg="none"
        size="sm"
        borderRadius="50%"
        aria-label="Next page"
        icon={<BsChevronRight />}
        _hover={{ bg: "teal.600", color: "white" }}
        disabled={currentPage === pages.length}
        onClick={() => handleNextButtonClick()}
      />
    </Flex>
  );
};

export default Pagination;

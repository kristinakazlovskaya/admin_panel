import React, { useState, useEffect } from "react";
import {
  Pagination as ChakraPagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
  PaginationSeparator,
} from "@ajna/pagination";
import { useQuery } from "@apollo/client";
import { Icon, Select, Spinner } from "@chakra-ui/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import Table from "../table";
import { operations, Types } from "./duck";

const Pagination: React.FC = () => {
  const [params, setParams] = useSearchParams();

  const [albumsCount, setAlbumsCount] = useState<number>(0);

  const {
    currentPage,
    setCurrentPage,
    pagesCount,
    pages,
    pageSize,
    setPageSize,
  } = usePagination({
    total: albumsCount,
    initialState: {
      currentPage: Number(params.get("page")) || 1,
      pageSize: Number(params.get("size")) || 10,
    },
    limits: {
      outer: 1,
      inner: 1,
    },
  });

  const { loading, data } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    variables: { page: currentPage, limit: pageSize },
  });

  useEffect(() => {
    if (data?.albums?.meta) {
      setAlbumsCount(Number(data.albums.meta.totalCount));
    }
  }, [data?.albums?.meta]);

  const handlePageChange = (nextPage: number): void => {
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

  const renderData = () => {
    if (!data || loading) return <Spinner color="teal.500" />;

    if (data?.albums?.data) {
      const content = data.albums.data.map((album) => ({
        id: album?.id,
        title: album?.title,
        username: album?.user?.username,
        pagesCount: album?.photos?.data?.length,
        actions: "[actions]",
      }));

      const headers = ["ID", "Title", "Username", "Number of photos", ""];

      return <Table headers={headers} content={content} />;
    }
  };

  return (
    <>
      <Select
        fontWeight="semibold"
        ml="auto"
        bg="white"
        onChange={handlePageSizeChange}
        w={20}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </Select>
      {renderData()}
      <ChakraPagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <PaginationContainer justify="center">
          <PaginationPrevious bg="none" _hover={{ bg: "none" }}>
            <Icon as={BsChevronLeft} />
          </PaginationPrevious>
          <PaginationPageGroup
            separator={<PaginationSeparator w={7} bg="gray.100" />}
          >
            {pages.map((p: number) => (
              <PaginationPage
                key={`pagination_page_${p}`}
                w={7}
                page={p}
                _hover={{
                  bg: "teal.600",
                  color: "white",
                }}
                _current={{
                  bg: "teal.500",
                  color: "white",
                }}
              />
            ))}
          </PaginationPageGroup>
          <PaginationNext bg="none" _hover={{ bg: "none" }}>
            <Icon as={BsChevronRight} />
          </PaginationNext>
        </PaginationContainer>
      </ChakraPagination>
    </>
  );
};

export default Pagination;

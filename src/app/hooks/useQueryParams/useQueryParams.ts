import { useSearchParams } from "react-router-dom";

const useQueryParams = (...queries: string[]) => {
  const [params] = useSearchParams();
  return queries.map((query) => params.get(query));
};

export default useQueryParams;

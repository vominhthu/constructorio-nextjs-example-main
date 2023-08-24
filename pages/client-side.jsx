import { useEffect, useState } from 'react';
import useCioClient from '../hooks/useCioClient'
import SearchResults from '../components/SearchResults';
import { useRouter } from "next/router";

export default function ClientSide() {
  const { query } = useRouter();
  const [results, setResults] = useState([]);
  const cioClient = useCioClient();

  useEffect(() => {
    const fetchResultsFromAPI = async () => {
      const data = await cioClient.search.getSearchResults(query.q, {
        resultsPerPage: 40
      });
      setResults(data?.response?.results);
    };

    if (cioClient?.search && query?.q) fetchResultsFromAPI();
  }, [cioClient?.search, query?.q]);

  return ( <SearchResults items={ results } searchText={query.q} /> )
}


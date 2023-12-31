import { fetchResultsServerSide } from '../utils/helpers';
import SearchResults from '../components/SearchResults';

export default function Home(props) {
  return ( <SearchResults items={ props?.data?.response?.results } searchText={ props?.data?.request?.term } /> )
}

export async function getServerSideProps(context) {
  const data = await fetchResultsServerSide(context);

  return { props: { data } }
}


import useSWR from 'swr';

const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then(res => res.json());

const useFetch = <D, E>(key: string) => useSWR<D, E>(key, fetcher);

export default useFetch;
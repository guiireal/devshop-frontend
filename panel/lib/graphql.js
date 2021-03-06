import { useState } from "react";
import useSWR from "swr";

const fetcher = async (query) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: query,
  });
  const json = await res.json();
  return json.data;
};

const useQuery = (query) => {
  return useSWR(JSON.stringify(query), fetcher);
};

const useMutation = (query) => {
  const [data, setData] = useState({});
  const mutate = async (variables) => {
    const mutation = {
      ...query,
      variables,
    };
    try {
      const returnedData = await fetcher(JSON.stringify(mutation));
      setData(returnedData);
    } catch (error) {
      console.error(error);
    }
  };
  return [data, mutate];
};

export { useQuery, useMutation };

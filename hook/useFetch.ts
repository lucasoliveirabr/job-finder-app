import { useState, useEffect } from "react";
import { Alert } from "react-native";
import axios from "axios";

interface Props {
  endpoint: string;
  full_query: {
    query: string;
    page: string;
    num_pages: string;
    date_posted: string;
  }
}

const useFetch = ({ endpoint, full_query }: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    },
    params: { ...full_query }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      Alert.alert("Error trying to fetch data.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
}

export default useFetch;
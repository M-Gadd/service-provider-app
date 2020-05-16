import api from "../api";
import { useState, useEffect } from "react";

export const useSubmit = (data: any) => {
  const [requests, setRequests] = useState(Array);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await api.submitUserInfo(data);
    setRequests(response.data.requests);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { requests, isLoading };
};

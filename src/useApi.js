import { useState, useEffect } from "react";
import Axios from "axios";
const ApiKey = process.env.REACT_APP_NEWS_API_KEY;

const useApi = term => {
  const { searchTerm } = term;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Axios(
          `https://newsapi.org/v2/everything?qInTitle=${searchTerm}&pageSize=10&page=1&apiKey=${ApiKey}`
        );
        console.log(res);
        setItems(res.data.articles);
      } catch (error) {
        setError(error.msg);
      }
    };
    getData();
  }, [searchTerm]);

  return { error, items };
};

export default useApi;

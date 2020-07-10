import { useEffect, useReducer } from "react";
import Axios from "axios";
const ApiKey = process.env.REACT_APP_NEWS_API_KEY;

const initialState = { articles: [], totalresults: 0, error: "" };

const reducer = (articles, action) => {
  switch (action.type) {
    case "ADD_ARTICLES":
      return {
        articles: action.payload.articles,
        totalresults: action.payload.totalresults,
      };
    case "ERROR":
      return { error: action.payload.error };
    default:
      return;
  }
};

const useApi = term => {
  const { searchTerm, page } = term;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      console.log(searchTerm, page);
      try {
        const res = await Axios(
          `https://newsapi.org/v2/everything?qInTitle=${searchTerm}&pageSize=10&page=${page}&apiKey=${ApiKey}`
        );
        console.log(res);
        dispatch({
          type: "ADD_ARTICLES",
          payload: {
            articles: res.data.articles,
            totalresults: res.data.totalResults,
          },
        });
      } catch (error) {
        //setError(error.msg);
        dispatch({
          type: "ERROR",
          payload: {
            error: error,
          },
        });
      }
    };
    getData();
  }, [searchTerm, page]);

  const { error, articles, totalresults } = state;

  return { error, articles, totalresults };
};

export default useApi;

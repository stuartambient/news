import React, { useState, useEffect } from "react";
const ApiKey = process.env.REACT_APP_NEWS_API_KEY;

const Feed = term => {
  const { searchTerm } = term;
  /* return <p>SearchTerm: {searchTerm}</p>; */
  //const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API}`;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  /*   useEffect(() => {
    fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result.articles);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); */

  /*   useEffect(() => {
    fetch(`https://newsapi.org/v2/sources?apiKey=${ApiKey}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result.sources);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []); */

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${ApiKey}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result.articles);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [searchTerm]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        Search Term: {searchTerm}
        <ul className="list">
          {items.map(item => (
            <li key={item.title}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Feed;

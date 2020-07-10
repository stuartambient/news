import React from "react";
import useApi from "./useApi";

const Articles = ({ searchTerm, page, numResults }) => {
  const { error, articles, totalresults } = useApi({ searchTerm, page });

  React.useEffect(() => {
    if (totalresults)
      return () => {
        numResults(totalresults);
      };
  }, [totalresults, numResults]);

  /*   React.useEffect(() => {
    if (totals)
      return () => {
        numResults(totals);
      };
  }, [totals, numResults]);  */

  return (
    <div>
      <h3>News feed</h3>
      {error && <p>{error.message}</p>}
      <ul>
        {articles.map(item => (
          <li key={item.url}>
            <a href={item.url}>{item.title}</a>
            <span>{item.page}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;

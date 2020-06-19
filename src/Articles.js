import React from "react";
import useApi from "./useApi";

const Articles = searchTerm => {
  const { error, items } = useApi(searchTerm);

  return (
    <div>
      <h3>News feed</h3>
      {error && <p>{error.message}</p>}
      <ul>
        {items.map(item => (
          <li key={item.title}>
            <a href={item.url}>
              {item.title}
              {item.page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;

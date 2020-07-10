import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Articles from "./Articles";
import Paginate from "./Paginate";

function App() {
  const [term, setTerm] = React.useState("today");
  const [page, setPage] = React.useState(1);
  const [totalResults, setTotalResults] = React.useState(0);

  const handleSearch = searchTerm => {
    setTerm(searchTerm);
    setPage(1);
  };

  const handlePagination = event => {
    switch (event.target.id) {
      case "pag-backward":
        if (page !== 1) {
          return setPage(page - 1);
        }
        return;
      case "pag-forward":
        return setPage(page + 1);
      default:
        return;
    }
  };

  const numResults = total => {
    console.log("total: ", total);
    setTotalResults(total);
  };

  return (
    <div className="App">
      <div className="header">
        <SearchForm onChange={handleSearch} />
      </div>
      <div className="paginate">
        <Paginate
          onClick={handlePagination}
          page={page}
          totalResults={totalResults}
        />
      </div>
      <div className="articles">
        <Articles searchTerm={term} numResults={numResults} page={page} />
      </div>
    </div>
  );
}

export default App;

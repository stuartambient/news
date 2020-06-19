import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import Articles from "./Articles";

function App() {
  const [term, setTerm] = React.useState("today");
  const handleSearch = searchTerm => {
    setTerm(searchTerm);
    console.log(term);
  };

  return (
    <div className="App">
      <div className="header">
        <SearchForm onChange={handleSearch} />
        <Articles searchTerm={term} />
      </div>
    </div>
  );
}

export default App;

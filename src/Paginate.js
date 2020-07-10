import React from "react";
import "./Paginate.css";

const Paginate = ({ onClick, page = 1, totalResults }) => {
  let numPages;
  if (totalResults > 0) numPages = totalResults / 10 - 1;
  if (numPages >= 10) numPages = 10 - 1;

  return (
    <div className="pagination">
      {page === 1 ? (
        <Page className="pag-backward"></Page>
      ) : (
        <Page
          id="pag-backward"
          className="pag-backward"
          role="img"
          ariaLabel="Page backward"
          onClick={onClick}
        >
          ◀
        </Page>
      )}
      {page > numPages ? (
        <Page className="pag-forward"></Page>
      ) : (
        <Page
          id="pag-forward"
          className="pag-forward"
          role="img"
          ariaLabel="Page forward"
          onClick={onClick}
        >
          ▶
        </Page>
      )}
    </div>
  );
};

const Page = ({ id, className, role, ariaLabel, onClick, children }) => (
  <span
    id={id}
    className={className}
    role={role}
    arialabel={ariaLabel}
    onClick={onClick}
  >
    {children}
  </span>
);

export default Paginate;

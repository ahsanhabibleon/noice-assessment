import React from "react";
import "./pagination.scss";

const Pagination = ({ data, pageLimit }) => {
  const { pageNumber, totalPages, updatePageNumber } = data;

  function goToNextPage() {
    updatePageNumber(pageNumber + 1);
  }

  function goToPreviousPage() {
    updatePageNumber(pageNumber - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    updatePageNumber(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((pageNumber - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`pagination-button${pageNumber === 1 ? " disabled" : ""}`}
      >
        Prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`pagination-button${pageNumber === item ? " active" : ""}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`pagination-button${pageNumber === totalPages ? " disabled" : ""
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

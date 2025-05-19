import React from "react";
import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

export const PaginationMovie = ({ onPageChange, pageCount }) => {
  const handlePageClick = (event) => {
    onPageChange(event.selected + 1);
    window.scrollTo(0, 0);
  };
  return (
    <Row className="mt-5">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </Row>
  );
};

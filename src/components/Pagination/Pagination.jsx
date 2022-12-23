import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  const setDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', setDimensions);
    return () => window.removeEventListener('resize', setDimensions);
  }, [])
  return (
    <>
      <style jsx="true">
        {`
        a {
          color: white; text-decoration: none;
        }
        @media (max-width: 768px) {
          .pagination {font-size: 12px}

          .next,
          .prev {display: none}
        }
        @media (max-width: 768px) {
          .pagination {font-size: 14px}
        }
      `}
      </style>
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        //.... other props here
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  )
}

export default Pagination

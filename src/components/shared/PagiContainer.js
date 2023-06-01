"use client";

import Pagination from "./Pagination";
import { useState } from "react";

export default function PagiContainer({ totalData }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  let totalPage = Math.ceil(totalData / limit);

  let pageNo;

  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }

  function handlePageChange(value) {
    if (value === "&laquo;" || value === "... ") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  return (
    <Pagination
      totalPage={totalPage}
      page={pageNo}
      siblings={1}
      onPageChange={handlePageChange}
    />
  );
}

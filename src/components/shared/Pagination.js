"use client";

import { returnPaginationRange } from "@/utils/pagination";

export default function Pagination({
  totalPage,
  page,
  siblings,
  onPageChange,
}) {
  let array = returnPaginationRange(totalPage, page, siblings);

  return (
    <div className="pagination">
      <ul>
        <li className="pagi-btn" onClick={() => onPageChange("&laquo;")}>
          <span>&laquo;</span>
        </li>
        <li className="pagi-btn" onClick={() => onPageChange("&lsaquo;")}>
          <span>&lsaquo;</span>
        </li>
        {array.map((value) => {
          if (value === page) {
            return (
              <li
                key={value}
                className="numb active"
                onClick={() => onPageChange(value)}
              >
                <span>{value}</span>
              </li>
            );
          } else if (value === " ..." || value === "... ") {
            return (
              <li key={value} className="dots">
                <span>{value}</span>
              </li>
            );
          } else {
            return (
              <li
                key={value}
                className="numb"
                onClick={() => onPageChange(value)}
              >
                <span>{value}</span>
              </li>
            );
          }
        })}
        <li className="pagi-btn" onClick={() => onPageChange("&rsaquo;")}>
          <span>&rsaquo;</span>
        </li>
        <li className="pagi-btn" onClick={() => onPageChange("&raquo;")}>
          <span>&raquo;</span>
        </li>
      </ul>
    </div>
  );
}

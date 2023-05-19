"use client";

import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder="Search" />
        <button className="search-icon">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

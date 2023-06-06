"use client";

import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export default function SearchBar({ onInputChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search">
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Search by tour name"
          autocomplete="off"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button
          className="search-icon"
          onClick={() =>
            onInputChange({ name: "search", value: searchTerm }, "searchTerm")
          }
        >
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

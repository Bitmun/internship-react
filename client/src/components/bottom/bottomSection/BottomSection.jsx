import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../search/Search";
import { BlocksSection } from "../blocksSection/BlocksSection";
import { debounce, filterItems } from "../../../utils/search";
import "./bottomSection.css";

export function BottomSection() {
  const [itemsList, setItemsList] = useState();
  const [filteredItems, setFilteredItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleSearch = useCallback(
    debounce((inputVal) => {
      if (itemsList) {
        const filteredData = filterItems(itemsList, inputVal);
        setFilteredItems(filteredData);
      }
    }, 300),
    [itemsList],
  );

  useEffect(() => {
    fetch("https://task5-2-server.onrender.com/items", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.redirect) {
          navigate("/login");
        }
        setItemsList(result);
        setFilteredItems(result);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="blocks-wrapper">
      <Search handleSearch={handleSearch} />
      {isLoading ? (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <BlocksSection itemsList={filteredItems} />
      )}
    </div>
  );
}

import React, { useCallback, useEffect, useState } from "react";
import Search from "../search/Search";
import BlocksSection from "../blocksSection/BlocksSection";
import { debounce, filterItems } from "../../../utils/search";
import "./bottomSection.css";

function BottomSection() {
  const [itemsList, setItemsList] = useState();
  const [filteredItems, setFilteredItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
    fetch("http://localhost:5000/items")
      .then((response) => response.json())
      .then((result) => {
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

export default BottomSection;

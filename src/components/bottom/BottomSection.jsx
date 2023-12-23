import React, { useCallback, useState } from "react";
import Search from "./Search";
import BlocksSection from "./BlocksSection";
import { SEARCH_ITEM_LIST } from "../../data/data";
import { debounce, filterItems } from "../../utils/search";
import "./bottom.css";

function BottomSection() {
  const [data, setData] = useState(SEARCH_ITEM_LIST);

  const handleSearch = useCallback(
    debounce((inputVal) => {
      const filteredData = filterItems(SEARCH_ITEM_LIST, inputVal);
      setData(filteredData);
    }, 300),
    [],
  );

  return (
    <div className="blocks-wrapper">
      <Search handleSearch={handleSearch} />
      <BlocksSection itemsList={data} />
    </div>
  );
}

export default BottomSection;

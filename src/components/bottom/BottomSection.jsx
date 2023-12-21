import React, { useCallback, useState } from "react";
import Search from "./Search";
import BlocksSection from "./BlocksSection";
import { SEARCH_ITEM_LIST } from "../../data/data";
import { debounce, fetchItemsAndSet } from "../../utils/search";

function BottomSection() {
  const [data, setData] = useState(SEARCH_ITEM_LIST);

  const handleSearch = useCallback(
    debounce(
      (inputVal) => fetchItemsAndSet(SEARCH_ITEM_LIST, inputVal, setData),
      300,
    ),
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

import React from "react";
import Search from "./Search";
import BlocksSection from "./BlocksSection";

function BottomSection() {
  return (
    <div className="blocks-wrapper">
      <Search />
      <BlocksSection />
    </div>
  );
}

export default BottomSection;

import React from "react";
import HeaderSection from "../../components/header/headerSection/HeaderSection";
import MainSection from "../../components/main/MainSection";
import BottomSection from "../../components/bottom/bottomSection/BottomSection";

function MainPage() {
  return (
    <div className="wrapper">
      <HeaderSection />
      <MainSection />
      <BottomSection />
    </div>
  );
}

export default MainPage;

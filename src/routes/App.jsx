import React from "react";
import HeaderSection from "../components/header/HeaderSection";
import MainSection from "../components/main/MainSection";
import BottomSection from "../components/bottom/BottomSection";
import "../components/styles.css";

function App() {
  return (
    <div className="wrapper">
      <HeaderSection />
      <MainSection />
      <BottomSection />
    </div>
  );
}

export default App;

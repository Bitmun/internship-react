import React from "react";
import "./mainPage.css";
import { HeaderSection } from "../../components/header/headerSection/HeaderSection";
import { MainSection } from "../../components/main/MainSection";
import { BottomSection } from "../../components/bottom/bottomSection/BottomSection";

export function MainPage() {
  return (
    <div className="wrapper">
      <HeaderSection />
      <MainSection />
      <BottomSection />
    </div>
  );
}

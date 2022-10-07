import React from "react";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";

function PageLayout() {
  return (
    <div className="PageLayout">
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
    </div>
  );
}

export default PageLayout;

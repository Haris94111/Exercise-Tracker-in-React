import React from "react";

import "../plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.css";
import "../plugins/bower_components/chartist/dist/chartist.min.css";
import "../css/style.min.css";
import Favicon from "../plugins/images/favicon1.ico";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import DashboardContent from "./DashboardContent";
function Main() {
  return (
    <>
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <Header />
        <LeftSideBar />
        <DashboardContent />
      </div>
    </>
  );
}

export default Main;

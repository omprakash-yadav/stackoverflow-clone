import React from "react";
import "./css/index.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function index() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
}

export default index;

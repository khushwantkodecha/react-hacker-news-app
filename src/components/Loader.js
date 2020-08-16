import React from "react";
import "../css/Loader.css";

const Loader = () => (
  <div className="text-center spinner">
    <i class="fa fa-cog fa-spin" style={{ fontSize: 80, color: "red" }}></i>
  </div>
);

export default Loader;

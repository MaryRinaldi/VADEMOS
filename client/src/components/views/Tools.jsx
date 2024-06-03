import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import MapComponent from "../pages/MapComponent";

const Tools = () => {
  return (
    <div className="tools-container">
      <h3>Tools</h3>
      <MapComponent />
      <h6>The boundaries and names shown and the designations used on this map do not imply the expression of any opinion whatsoever on the part of FAO concerning the legal status of any country, territory, city or area or of its authorities, or concerning the delimitation of its frontiers and boundaries.</h6>
    </div>
  );
};

export default Tools;

import React from "react";
import "../css/preloader.css";

const preloaderArray = [1, 2, 3, 4, 5, 6, 7, 8];

export const Preloader = () => (
  <div id="preloader-group">
    {preloaderArray.map((item, index) => (
      <div key={index} id={`preloader_${item}`} className="preloader" />
    ))}
  </div>
);

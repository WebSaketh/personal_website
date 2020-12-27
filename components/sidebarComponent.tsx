import React, { useState } from "react";
import { sideBarData } from "../Models/sideBarData";

type Props = {
  sideBarData: sideBarData;
};

const SidebarComponent: React.FC<Props> = ({ sideBarData }) => {
  if (sideBarData.isImage == true) {
    return (
      <div>
        <div className="bg-white rounded-md p-0 mb-4">
          <a href={sideBarData.link}>
            <img
              className="object-cover rounded-md"
              src={sideBarData.imgSRC}
            ></img>
          </a>
        </div>
      </div>
    );
  }
  if (sideBarData.isImage == false) {
    return (
      <div className="bg-white rounded-md p-4 mb-4">
        <div className="text-lg">{sideBarData.title}</div>
        <div className="object-cover mt-2 flex-1 rounded-md">
          <img
            className="object-cover rounded-md"
            src={sideBarData.imgSRC}
          ></img>
        </div>
        <div className="text-sm mt-2 flex-1">{sideBarData.desc}</div>
      </div>
    );
  }
};
export default SidebarComponent;

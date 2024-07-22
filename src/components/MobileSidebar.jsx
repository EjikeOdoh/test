import React, { useEffect } from "react";
import { btns, MenuItem } from "./Sidebar";
import Close from "../assets/close.png";

const MobileSidebar = ({ show, hideMenu }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 z-10 w-1/2 h-full flex flex-col bg-[#7000F6] ">
      <div className="my-2">
        <button className="px-3 flex items-center gap-3" onClick={hideMenu}>
          <img src={Close} />
          <span className="text-white ">Close</span>
        </button>
      </div>
      <div className="flex items-center gap-2 py-4 px-6 border border-[#F3F4F61F]">
        <div className="w-12 h-12 rounded-full bg-[#FFFFFF1F] flex justify-center items-center">
          <p className="text-base font-semibold text-white">TU</p>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold">Test User</h3>
          <p className="text-xs text-[#E4E4E7]">test@user.com</p>
        </div>
      </div>
      <div className="flex-1 px-6 py-3 flex flex-col gap-2">
        {btns.map((btn) => (
          <MenuItem
            key={btn.label}
            label={btn.label}
            icon={btn.icon}
            to={btn.label.toLocaleLowerCase()}
            onClick={hideMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;

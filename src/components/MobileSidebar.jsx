import React from "react";
import { btns, MenuItem } from "./Sidebar";
import Close from "../assets/close.png";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

const MobileSidebar = ({ show, hideMenu }) => {
  const user = useSelector(selectUser);

  if (!show) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 z-10 w-fit h-full flex flex-col bg-[#7000F6] ">
      <div className="my-2">
        <button className="px-3 flex items-center gap-3" onClick={hideMenu}>
          <img src={Close} />
          <span className="text-white ">Close</span>
        </button>
      </div>
      <div className="flex items-center gap-2 py-4 px-6 border border-[#F3F4F61F]">
        <div className="w-12 h-12 rounded-full bg-[#FFFFFF1F] flex justify-center items-center">
          <p className="text-base font-semibold text-white">
            {user.fName[0]}
            {user.lName[0]}
          </p>
        </div>
        <div>
          <h3 className="text-white text-sm font-semibold">
            {user.fName} {user.lName}
          </h3>
          <p className="text-xs text-[#E4E4E7]">{user.email}</p>
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

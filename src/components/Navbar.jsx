import React from "react";
import Logo from "../assets/icon.png";
import Avatar from "../assets/avatar.png";
import Query from "../assets/query.png";
import Arrow from "../assets/arrow-down.png";
import Menu from "../assets/menu.png";

const Navbar = ({ showMenu }) => {
  const location = window.location.href;
  const title = location.includes("transactions") ? "Transactions" : "Overview";
  return (
    <div className="flex items-center justify-between px-6 sm:px-12 py-9 sm:py-4">
      <div className="hidden sm:block">
        <img src={Logo} />
      </div>

      <button className="sm:hidden" onClick={showMenu}>
        <img src={Menu} />
      </button>

      <p className="sm:hidden text-xl text-[#333333]">{title}</p>

      <div className="flex items-center gap-6">
        <button className="hidden sm:block">
          <img src={Query} />
        </button>

        <button className="flex items-center gap-2">
          <img src={Avatar} />

          <span className="hidden sm:block">Tee</span>
          <img src={Arrow} className="hidden sm:block" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

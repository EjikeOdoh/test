import React from "react";
import { NavLink } from "react-router-dom";
import Overview from "../assets/rocket.png";
import Users from "../assets/users.png";
import Transactions from "../assets/file.png";
import Transfers from "../assets/transfer.png";
import Deposits from "../assets/archive.png";
import Savings from "../assets/piggy-bank.png";
import Bills from "../assets/smartphone.png";
import Reports from "../assets/pie-chart.png";
import Compliance from "../assets/compliance.png";
import Settings from "../assets/settings.png";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

export const MenuItem = ({ label, icon, to, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `w-full flex  items-center gap-2 py-2.5 px-2 rounded-md ${
          isActive
            ? "bg-[#FFFFFF3D] text-white"
            : "bg-transparent text-[#FFFFFFB8]"
        }`
      }
    >
      <img src={icon} />
      <span className="text-base font-semibold">{label}</span>
    </NavLink>
  );
};

export const btns = [
  {
    label: "Overview",
    icon: Overview,
  },

  {
    label: "Users",
    icon: Users,
  },
  {
    label: "Transactions",
    icon: Transactions,
  },
  {
    label: "Transfers",
    icon: Transfers,
  },
  {
    label: "Deposits",
    icon: Deposits,
  },
  {
    label: "Savings",
    icon: Savings,
  },
  {
    label: "Bill Payment",
    icon: Bills,
  },
  {
    label: "Reports",
    icon: Reports,
  },
  {
    label: "Compliance",
    icon: Compliance,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="w-[260px] h-full hidden sm:flex flex-col bg-[#7000F6] ">
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
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

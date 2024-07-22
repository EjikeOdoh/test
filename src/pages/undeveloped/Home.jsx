import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../../components/MobileSidebar";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    console.log(menu);
    setMenu(true);
    console.log(menu);
  };
  const hideMenu = () => setMenu(false);

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = menu ? "hidden" : "auto";
    };
    handleScroll();
  }, [menu]);
  return (
    <div>
      <Navbar showMenu={showMenu} />
      <div className="flex h-full">
        <Sidebar />
        <MobileSidebar show={menu} hideMenu={hideMenu} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

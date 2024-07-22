import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../../components/MobileSidebar";
import { useDispatch } from "react-redux";
import { setTransactions } from "../../redux/slices/transactionSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    console.log(menu);
    setMenu(true);
    console.log(menu);
  };
  const hideMenu = () => setMenu(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await axios.get(
        "https://integrations.getravenbank.com/v1/accounts/transactions",
        {
          headers: {
            Authorization:
              "Bearer RVSEC-8bb756a159b787007fa50b556b45d11d0b49c0c0c0a7b47b3364fa7d094009d2b404a106a71103b9aecb33f73b82f5be-1662632092469",
          },
        }
      );
      const { transactions } = data.data;
      const statuses = ["Completed", "Pending", "Failed"];

      const cleanData = transactions.map((x) => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        return { ...x, status };
      });
      setData(cleanData);
      dispatch(setTransactions(cleanData));
    };

    fetchTransactions();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = menu ? "hidden" : "auto";
    };
    handleScroll();
  }, [menu]);
  return (
    <div className="h-screen overflow-y-scroll">
      <Navbar showMenu={showMenu} />
      <div className="flex h-full">
        <Sidebar />
        <MobileSidebar show={menu} hideMenu={hideMenu} />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;

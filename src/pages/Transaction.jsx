import React, { useState, useEffect } from "react";
import Add from "../assets/add.png";
import Sort from "../assets/sort.png";
import Filter from "../assets/filter.png";
import Down from "../assets/down.png";
import Left from "../assets/left.png";
import Right from "../assets/right.png";
import Stat from "../components/Stat";
import Table from "../components/Table";
import MobileTable from "../components/MobileTable";
import AddTrxModal from "../components/AddTrxModal";
import { useSelector } from "react-redux";
import { selectTransactions } from "../redux/slices/transactionSlice";

const Transaction = () => {
  const transactions = useSelector(selectTransactions);

  const [addModal, setAddModal] = useState(false);

  const showAddModal = () => setAddModal(true);
  const hideAddModal = () => setAddModal(false);

  return (
    <div className="sm:px-20 px-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-[#0A090B] text-3xl font-semibold">
            Transactions
          </h1>
          <p className="text-[#7F7D83] text-sm ">
            View all your transactions in the list of product{" "}
          </p>
        </div>

        <button
          className="h-14 w-14 bg-[#7000F6] flex justify-center items-center rounded-full"
          onClick={showAddModal}
        >
          <img src={Add} className="block" />
        </button>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <Stat
          label="Total Balance"
          labelColor="text-[#223E3B]"
          value="N87k"
          tag="+1 today"
          color="text-[#7000F6]"
        />
        <Stat
          label="Total Credit"
          labelColor="text-[#0C296A]"
          value="234,120"
          tag=""
          color="text-[#008000]"
        />
        <Stat
          label="Total Debit"
          labelColor="text-[#223E3B]"
          value="N923k"
          tag="+5% today"
          color="text-[#FF0000]"
        />
      </div>
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search Transactions"
            className="h-10 border border-[#E4E4E7] rounded-md px-3 py-2 w-full sm:w-64"
          />
        </div>

        <div className="flex items-center justify-end gap-2">
          <button className="flex items-center gap-2 border border-[#E4E4E7] p-2 rounded-md">
            <img src={Filter} />
            <span className="text-[#71717A] text-sm">Filters</span>
            <img src={Down} />
          </button>
          <button className="flex items-center gap-2 border border-[#E4E4E7] p-2 rounded-md">
            <img src={Left} />
            <span className="text-[#71717A] text-sm">1- 10 of 240</span>
            <img src={Right} />
          </button>
          <button className="sm:hidden">
            <img src={Sort} />
          </button>
        </div>
      </div>
      <Table data={transactions} />
      <MobileTable data={transactions} />
      <AddTrxModal show={addModal} onClose={hideAddModal} />
    </div>
  );
};

export default Transaction;

import React, { useState, useEffect } from "react";
import Add from "../assets/add.png";
import Sort from "../assets/sort.png";
import Stat from "../components/Stat";
import TransactionRow from "../components/TransactionRow";

import Table from "../components/Table";
import axios from "axios";
import MobileTable from "../components/MobileTable";
import AddTrxModal from "../components/AddTrxModal";

const Transaction = () => {
  const [data, setData] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const showAddModal = () => setAddModal(true);
  const hideAddModal = () => setAddModal(false);

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
      console.log(transactions);

      const statuses = ["Completed", "Pending", "Failed"];

      const cleanData = transactions.map((x) => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        return { ...x, status };
      });
      setData(cleanData);
    };

    fetchTransactions();
  }, []);

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
            className="h-10 border border-[#E4E4E7] rounded-md px-3 py-2 w-full"
          />
        </div>
        <button>
          <img src={Sort} />
        </button>
      </div>
      <Table data={data} />
      <MobileTable data={data} />
      <AddTrxModal show={addModal} onClose={hideAddModal} />
    </div>
  );
};

export default Transaction;

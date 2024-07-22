import React, { useState } from "react";

import { transactions } from "../utils/Generator";
import TransactionRow from "./TransactionRow";
import EditModal from "./EditModal";
import DeleteTrxModal from "./DeleteTrxModal";

const Table = ({ data = transactions }) => {
  const [selected, setSelected] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const showEditModal = (x) => {
    setSelected(x);
    setEditModal(true);
    console.log(x);
  };
  const showDeleteModal = (x) => {
    setSelected(x);
    setDeleteModal(true);
  };

  const closeModal = () => {
    console.log("close");
    setEditModal(false);
    setDeleteModal(false);
  };

  return (
    <div className="w-full">
      <table className="hidden sm:block">
        <thead>
          <tr className="w-full flex items-center">
            <th className="">Reference</th>
            <th className="">Amoung</th>
            <th className="">Transaction Date</th>
            <th className="">Updated last</th>
            <th className="">Status</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={transaction}
              onEdit={(transaction) => showEditModal(transaction)}
              onDelete={showDeleteModal}
            />
          ))}
        </tbody>
      </table>
      <EditModal show={editModal} onClose={closeModal} data={selected} />
      <DeleteTrxModal show={deleteModal} onClose={closeModal} />
    </div>
  );
};

export default Table;

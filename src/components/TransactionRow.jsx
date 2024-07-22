import React from "react";
import Send from "../assets/send.png";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";

import { getIcon, getStatus } from "../utils/Generator";
import { formatNumber, formatDateTime, formatString } from "../utils/formatter";

const TransactionRow = ({ transaction, onEdit, onDelete }) => {
  const selectEdit = (x) => {
    onEdit(x);
  };

  const selectDelete = (x) => {
    onDelete(x);
  };

  return (
    <tr className="flex items-center w-full">
      <td className="flex items-center gap-2.5">
        {getIcon(transaction.direction)}
        <span className="text-[#4B5563] text-sm">
          {formatString(transaction.reference)}
        </span>
      </td>
      <td className="text-sm text-[#4B5563]">
        {transaction.currency} {formatNumber(transaction._value)}
      </td>
      <td className="text-sm text-[#4B5563]">
        {formatDateTime(transaction.created_at)}
      </td>
      <td className="text-sm text-[#4B5563]">
        {formatDateTime(transaction.updated_at)}
      </td>
      <td>{getStatus(transaction.status)}</td>
      <td className="flex items-center gap-2.5">
        <button onClick={() => selectEdit(transaction)}>
          <img src={Edit} />
        </button>
        <button onClick={() => selectDelete(transaction)}>
          <img src={Delete} />
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;

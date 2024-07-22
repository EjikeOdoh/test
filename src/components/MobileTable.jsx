import React from "react";
import { getIcon, getStatus } from "../utils/Generator";
import { formatCurrency, formatDateTime } from "../utils/formatter";

const Row = ({ transaction }) => {
  return (
    <div className="flex gap-2 py-4">
      <div>{getIcon(transaction.direction)}</div>
      <div className="flex-1 flex">
        <div className="flex-1">
          <p className="text-[#020202] text-xs font-semibold mb-4">
            {transaction.direction === "credit" ? "+" : "-"}{" "}
            {formatCurrency(transaction._value)}
          </p>
          <p className="text-[#676767] text-xs">
            {formatDateTime(transaction.created_at)}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-right mb-3">{getStatus(transaction.status)}</p>
          <p className="text-[#676767] text-xs text-right">
            {formatDateTime(transaction.updated_at)}
          </p>
        </div>
      </div>
    </div>
  );
};

const MobileTable = ({ data }) => {
  return (
    <div className="sm:hidden">
      {data.map((transaction) => (
        <Row key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default MobileTable;

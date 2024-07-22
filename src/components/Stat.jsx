import React from "react";

const Stat = ({ color, label, value, tag, labelColor }) => {
  return (
    <div className="p-4">
      <p className={`font-medium text-xs mb-6 ${labelColor}`}>{label}</p>
      <div>
        <div className="flex items-baseline gap-1">
          <h1 className="text-[#0A090B] text-3xl font-semibold">{value}</h1>
          <p className="text-[#7F7D83] text-xs">{tag}</p>
        </div>
        <button>
          <span className={`text-xs ${color}`}>View details</span>
        </button>
      </div>
    </div>
  );
};

export default Stat;

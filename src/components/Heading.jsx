import React from "react";

const Heading = ({ title, label }) => {
  return (
    <div className="mb-6">
      <h1 className="text-[#0A090B] text-3xl font-semibold">{title}</h1>
      <p className="text-[#7F7D83] text-sm ">{label}</p>
    </div>
  );
};

export default Heading;

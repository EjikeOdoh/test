import React from "react";
import Close from "../assets/close.png";
import Input from "./Input";
import Dropdown from "./Dropdown";

const EditModal = ({ show = true, onClose, children }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center sm:justify-end justify-center">
      <div className="bg-white p-4 shadow-lg relative flex flex-col w-full sm:w-80 h-full">
        <div className="flex sm:justify-normal justify-end mt-2 mb-4 sm:mb-6">
          <button onClick={onClose}>
            <img src={Close} />
          </button>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="mb-8">
            <h1 className="font-semibold text-2xl text-[#0A090B]">
              Update Transaction
            </h1>
            <p className="text-[#7F7D83] text-sm">Update transaction table</p>
          </div>

          <form className="flex-1 flex flex-col justify-between">
            <div>
              <Dropdown
                label="Transaction Direction"
                options={["Debit", "Credit"]}
              />
              <Dropdown
                label="Status"
                options={["Success", "Pending", "Failed"]}
              />
              <Input
                label="Amount"
                placeholder="Enter an amount"
                type="number"
              />
            </div>

            <button
              type="submit"
              className="bg-[#7000F6] w-full text-white font-semibold p-4 rounded-md mt-10"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

import React from "react";
import Close from "../assets/cancel.png";

const DeleteTrxModal = ({ show = true, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center sm:justify-end justify-center">
      <div className="bg-white p-4 shadow-lg relative flex flex-col w-full sm:w-[430px] h-full">
        <div className="flex sm:justify-normal justify-end mt-2 mb-4 sm:mb-6">
          <button onClick={onClose}>
            <img src={Close} />
          </button>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="mb-8">
            <h1 className="font-semibold text-2xl text-[#0A090B]">
              Delete Transaction?
            </h1>
            <p className="text-[#7F7D83] text-sm">
              Are you sure to delete this transaction? This action cannot be
              undone
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-[#FF0F00] flex-1 text-white font-semibold p-4 rounded-md mt-10"
            >
              Yes, Delete
            </button>
            <button
              type="submit"
              className="bg-[#E3E3E3] flex-1 text-[#09090B] font-semibold p-4 rounded-md mt-10"
              onClick={onClose}
            >
              No, this is a Mistake
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTrxModal;

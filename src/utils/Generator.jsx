import Send from "../assets/send.png";
import Receive from "../assets/receive.png";

const transactions = Array.from({ length: 50 }, (_, index) => {
  const referenceNumber = `TXN${(index + 1).toString().padStart(3, "0")}`;
  const amount = (Math.random() * 1000).toFixed(2); // Random amount between 0 and 1000
  const transactionDate = new Date(2024, 6, Math.floor(Math.random() * 30) + 1)
    .toISOString()
    .split("T")[0];
  const updateTime = new Date().toISOString();
  const statuses = ["Completed", "Pending", "Failed"];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const transactionTypes = ["debit", "credit"];
  const transactionType =
    transactionTypes[Math.floor(Math.random() * transactionTypes.length)];

  return {
    Reference: referenceNumber,
    amount: parseFloat(amount),
    transactionDate,
    updateTime,
    status,
    transactionType,
  };
});

const getStatus = (status) => {
  let color, backgroundColor, text;

  switch (status) {
    case "Completed":
      color = "text-[#1ACE37]";
      backgroundColor = "bg-[#E8FFF6]";
      text = "Success";
      break;
    case "Pending":
      color = "text-[#EA872D]";
      backgroundColor = "bg-[#FFF6ED]";
      text = "Pending";
      break;
    case "Failed":
      color = "text-[#FF0F00]";
      backgroundColor = "bg-[#FFF5F5]";
      text = "Failed";
      break;
    default:
      color = "#808080";
      backgroundColor = "#F0F0F0";
      text = "Unknown";
      break;
  }

  return (
    <span
      className={`text-xs ${color} px-3 py-1.5 ${backgroundColor} rounded-full`}
    >
      {text}
    </span>
  );
};

const getIcon = (type) => {
  let img;
  switch (type) {
    case "debit":
      img = Send;
      break;
    case "credit":
      img = Receive;
      break;
    default:
      break;
  }

  return <img src={img} />;
};

export { transactions, getStatus, getIcon };

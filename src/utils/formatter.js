const formatNumber = (number) => {
  return Intl.NumberFormat().format(number);
};

const formatCurrency = (amt) => {
  return Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amt);
};

function formatDateTime(dateTime) {
  const date = new Date(dateTime);

  const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const time = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);

  return `${day}, ${month} ${year} • ${time}`;
}

function formatString(str, visibleLength = 6) {
  if (str.length <= visibleLength) {
    return str;
  }
  return str.substring(0, visibleLength) + "...";
}

export { formatDateTime, formatNumber, formatString, formatCurrency };

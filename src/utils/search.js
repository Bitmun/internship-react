export function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export const fetchItemsAndSet = (itemsList, query, setFunc) => {
  const filteredItems = itemsList.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query),
  );
  setFunc(filteredItems);
};

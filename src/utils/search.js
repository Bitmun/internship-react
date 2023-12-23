export function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export const filterItems = (itemsList, query) => {
  const filteredItems = itemsList.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query),
  );
  return filteredItems;
};

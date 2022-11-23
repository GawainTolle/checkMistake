export function paginate(items, pageSize, activePage) {
  const firstIndex = (activePage - 1) * pageSize;
  return [...items].splice(firstIndex, pageSize);
}

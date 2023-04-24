export const clearEntry = (value: string) => {
  return value.length === 1 ? value.slice(0, -1) : '0';
};

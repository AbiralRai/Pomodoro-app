export const ProgressWidth = (initialTime, time) =>
  ((100 / initialTime) * (initialTime - time)).toFixed(4);

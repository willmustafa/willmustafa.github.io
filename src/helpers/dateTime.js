export const toDate = (str) => {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date(str));
};

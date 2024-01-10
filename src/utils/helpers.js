export function formateDate(value) {
  const day = new Date(value).getDate();
  const month = new Date(value).getMonth() + 1;
  const year = new Date(value).getFullYear();

  return `${day}/${month}/${year}`;
}

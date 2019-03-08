//returns a time in format 'HH:MM | DD/MM/YYYY'; input parameter is UNIX date
export function calculateTime(UNIXdate) {
  const time = new Date(UNIXdate * 1000);

  const hours = (time.getHours() < 10 ? "0" : "") + time.getHours();
  const minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  const date = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getYear();

  return `${hours}:${minutes} | ${date}/${month}/${1900 + year}`;
}

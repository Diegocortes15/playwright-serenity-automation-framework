import casual from "casual";

export const getRandomPositiveNumber = async (max: number): Promise<number> =>
  Math.floor(Math.random() * max);

export const getDateParts = (dateString: string) => {
  const dateParts = dateString.split("/");
  const day = Number(dateParts[1]).toString();
  const month = Number(parseInt(dateParts[0]) - 1).toString();
  const year = Number(dateParts[2]).toString();
  const fullDate = `${month.padStart(2, "0")}/${day.padStart(2, "0")}/${year}`;
  return {
    fullDate,
    day,
    month,
    year,
  };
};

export const getDateTimeParts = (dateString: string) => {
  const date = new Date(dateString);
  const hoursLegacy = date.getHours().toString();
  const month = date.toLocaleString("en-US", {month: "long"});
  const day = (
    date.getDate() === 27 ? date.getDate() - 1 : date.getDate()
  ).toString();
  const year = date.getFullYear().toString();
  let hours = hoursLegacy;
  const minutes = (Math.floor(date.getMinutes() / 15) * 15)
    .toString()
    .padStart(2, "0");
  const meridian = date.toString().includes("PM") ? "PM" : "AM";
  // Adjust the hour value for PM times
  hours =
    meridian.includes("PM") && Number(hoursLegacy) < 12 ? (hours += 12) : hours;
  // Format the time in 24-hour format (with leading zeros)
  const time = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  const fullDate = `${month} ${day}, ${year} ${hoursLegacy}:${minutes} ${meridian}`;
  return {
    fullDate,
    month,
    day,
    year,
    time,
  };
};

export const getRandomDate = async (format): Promise<string> => {
  const date = casual.date(format);
  const formatDate = getDateParts(date).fullDate;
  return formatDate;
};

export const getRandomDateTime = async (format): Promise<string> => {
  const date = casual.date(format);
  const formatDate = getDateTimeParts(date).fullDate;
  return formatDate;
};

export const getCurrentYear = async (): Promise<number> =>
  new Date().getFullYear();

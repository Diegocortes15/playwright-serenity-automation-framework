import casual from "casual";

export const getRandomPositiveNumber = async (max: number): Promise<number> =>
  Math.floor(Math.random() * max);

export const getDateParts = (dateString: string) => {
  const dateParts = dateString.split("/");
  const day = Number(dateParts[1]).toString();
  const month = (Number(dateParts[0]) - 1).toString();
  const year = Number(dateParts[2]).toString();
  const fullDate = dateString;
  return {
    fullDate,
    day,
    month,
    year,
  };
};

export const getDateTimeParts = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", {month: "long"});
  const day = (
    date.getDate() === 27 ? date.getDate() - 1 : date.getDate()
  ).toString();
  const year = date.getFullYear().toString();
  let hoursFormat = hours;
  const minutes = (Math.floor(date.getMinutes() / 15) * 15)
    .toString()
    .padStart(2, "0");
  const meridian = dateString.toString().includes("PM") ? "PM" : "AM";
  // Adjust the hour value for PM times
  if (Number(hours) < 12 && meridian === "AM") {
    hoursFormat = Number(hours).toString();
  } else if (Number(hours) === 0 && meridian === "AM") {
    hoursFormat = (12).toString();
  } else if (Number(hours) > 12 && meridian === "PM") {
    hoursFormat = (Number(hoursFormat) - 12).toString();
  }

  // Format the time in 24-hour format (with leading zeros)
  const time = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  const fullDate = `${month} ${day}, ${year} ${hoursFormat}:${minutes} ${meridian}`;
  return {
    fullDate,
    month,
    day,
    year,
    time,
  };
};

export const getRandomDate = async (format) => {
  const date = casual.date(format);
  const dateParts = getDateParts(date);
  const {fullDate, month, day, year} = dateParts;
  return {fullDate, month, day, year};
};

export const getRandomDateTime = async (format) => {
  const date = casual.date(format);
  const dateTimeParts = getDateTimeParts(date);
  const {fullDate, month, day, year, time} = dateTimeParts;
  return {fullDate, month, day, year, time};
};

export const getCurrentYear = async (): Promise<number> =>
  new Date().getFullYear();

import {By, PageElement} from "@serenity-js/web";

export const inputDatePickerMonthYear = () =>
  PageElement.located(By.id("datePickerMonthYearInput")).describedAs(
    "Date Picker Month Year Input"
  );

export const inputDateAndTimePicker = () =>
  PageElement.located(By.id("dateAndTimePickerInput")).describedAs(
    "Date And Time Picker Input"
  );

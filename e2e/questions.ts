import {Answerable, QuestionAdapter} from "@serenity-js/core";
import {webTableRecords} from "./screens/webTables.screen";
import {Text, Value} from "@serenity-js/web";
import {
  inputDateAndTimePicker,
  inputDatePickerMonthYear,
} from "./screens/datePicker.screen";
import {optionsDateTimeYear} from "./screens/calendarSelectDateTime.screen";

export const persistedRecords = () =>
  webTableRecords().count() as QuestionAdapter<number>;

export const persistedNameRecords = () =>
  Text.ofAll(webTableRecords())
    .map((firstName) => firstName)
    .describedAs("Displayed Records") as QuestionAdapter<string[]>;

export const persistedNameRecordById = (index: Answerable<number>) => {
  return Text.ofAll(webTableRecords()).map((firstName) => firstName)[
    index as number
  ] as QuestionAdapter<string>;
};

export const persistedDate = () =>
  Value.of(inputDatePickerMonthYear()).describedAs(
    "Selected Date Value"
  ) as QuestionAdapter<string>;

export const persistedDateTimeYear = (year: Answerable<string>) =>
  optionsDateTimeYear(year).count() as QuestionAdapter<number>;

export const persistedDateTime = () =>
  Value.of(inputDateAndTimePicker()).describedAs(
    "Selected Date and Time Value"
  ) as QuestionAdapter<string>;

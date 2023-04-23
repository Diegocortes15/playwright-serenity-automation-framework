import {Answerable, QuestionAdapter} from "@serenity-js/core";
import {webTableRecords} from "./screens/webTables.screen";
import {ModalDialog, Text, Value} from "@serenity-js/web";
import {
  inputDateAndTimePicker,
  inputDatePickerMonthYear,
} from "./screens/datePicker.screen";
import {optionsDateTimeYear} from "./screens/calendarSelectDateTime.screen";
import {
  textResultConfirmModalDialog,
  textResultPromptModalDialog,
} from "./screens/alerts.screen";

export const questionRecords = () =>
  webTableRecords().count() as QuestionAdapter<number>;

export const questionNameRecords = () =>
  Text.ofAll(webTableRecords())
    .map((firstName) => firstName)
    .describedAs("Displayed Records") as QuestionAdapter<string[]>;

export const questionNameRecordById = (index: Answerable<number>) => {
  return Text.ofAll(webTableRecords()).map((firstName) => firstName)[
    index as number
  ] as QuestionAdapter<string>;
};

export const questionDate = () =>
  Value.of(inputDatePickerMonthYear()).describedAs(
    "Selected Date Value"
  ) as QuestionAdapter<string>;

export const questionDateTimeYear = (year: Answerable<string>) =>
  optionsDateTimeYear(year).count() as QuestionAdapter<number>;

export const questionDateTime = () =>
  Value.of(inputDateAndTimePicker()).describedAs(
    "Selected Date and Time Value"
  ) as QuestionAdapter<string>;

export const questionModalDialogMessage = () =>
  ModalDialog.lastDialogMessage() as QuestionAdapter<string>;

export const questionResultConfirmModalDialog = () =>
  Text.of(textResultConfirmModalDialog()).describedAs(
    "Text Result Confirm ModalDialog"
  ) as QuestionAdapter<string>;

export const questionResultPromptModalDialog = () =>
  Text.of(textResultPromptModalDialog()).describedAs(
    "Text Result Prompt ModalDialog"
  ) as QuestionAdapter<string>;

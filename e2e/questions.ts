import {Answerable, QuestionAdapter} from "@serenity-js/core";
import {webTableRecords} from "./screens/webTables.screen";
import {Text} from "@serenity-js/web";

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

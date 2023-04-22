import {Answerable} from "@serenity-js/core";
import {By, PageElement, PageElements} from "@serenity-js/web";

export const buttonAddRecord = () =>
  PageElement.located(By.id("addNewRecordButton")).describedAs(
    "Add New Record Button"
  );

export const webTableRecords = () =>
  PageElements.located(
    By.css("[role='rowgroup'] [role='gridcell']:first-child:not(:has(span))")
  ).describedAs("Web Table Records");

export const buttonRemoveRecordByIndex = (index: Answerable<number>) =>
  PageElement.located(By.id(`delete-record-${index}`)).describedAs(
    `Remove Record ${index} Button`
  );

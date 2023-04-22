import {Ensure} from "@serenity-js/assertions";
import {Answerable, d, Task} from "@serenity-js/core";
import {Click, Enter} from "@serenity-js/web";
import {webTables} from "./screens/elements.screen";
import {cardElements} from "./screens/home.screen";
import {
  buttonSubmit,
  inputAge,
  inputDepartment,
  inputEmail,
  inputFirstName,
  inputLastName,
  inputSalary,
} from "./screens/registrationForm.screen";
import {
  buttonAddRecord,
  buttonRemoveRecordByIndex,
} from "./screens/webTables.screen";
import {persistedNameRecordById} from "./questions";

export const goToElementsTab = (): Task =>
  Task.where("#actor go to elements tab", Click.on(cardElements()));

export const goToWebTablesTab = (): Task =>
  Task.where("#actor go to Web Tables tab", Click.on(webTables()));

export const addRecord = (record: Answerable<any>): Task =>
  Task.where(
    "#actor add a new record",
    Click.on(buttonAddRecord()),
    Enter.theValue(record.firstName).into(inputFirstName()),
    Enter.theValue(record.lastName).into(inputLastName()),
    Enter.theValue(record.email).into(inputEmail()),
    Enter.theValue(record.age).into(inputAge()),
    Enter.theValue(record.salary).into(inputSalary()),
    Enter.theValue(record.department).into(inputDepartment()),
    Click.on(buttonSubmit())
  );

export const removeRecord = (index: Answerable<number>): Task => {
  const i = (index as number) + 1;
  return Task.where(
    `#actor remove record number ${i}`,
    Click.on(buttonRemoveRecordByIndex(i))
  );
};

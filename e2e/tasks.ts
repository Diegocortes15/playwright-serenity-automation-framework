import {Answerable, Task} from "@serenity-js/core";
import {Click, Enter, Select} from "@serenity-js/web";
import {webTablesTab} from "./screens/elements.screen";
import {cardElements, cardWidgets} from "./screens/home.screen";
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
import {datePickerTab} from "./screens/widgets.screen";
import {getDateParts, getDateTimeParts} from "./utils/support-factory.utils";
import {
  selectDateDay,
  selectDateMonth,
  selectDateYear,
} from "./screens/calendarSelectDate.screen";
import {
  inputDateAndTimePicker,
  inputDatePickerMonthYear,
} from "./screens/datePicker.screen";
import {
  interactionSelectDateTimeMonth,
  interactionSelectDateTimeYear,
} from "./interactions";
import {
  selectDateTimeDay,
  selectDateTimeTime,
} from "./screens/calendarSelectDateTime.screen";

export const goToElementsCardTask = (): Task =>
  Task.where("#actor go to elements tab", Click.on(cardElements()));

export const goToWebTablesTabTask = (): Task =>
  Task.where("#actor go to Web Tables tab", Click.on(webTablesTab()));

export const addRecordTask = (record: Answerable<any>): Task =>
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

export const taskRemoveRecord = (index: Answerable<number>): Task => {
  const i = (index as number) + 1;
  return Task.where(
    `#actor remove record number ${i}`,
    Click.on(buttonRemoveRecordByIndex(i))
  );
};

export const taskGoToWidgetsCard = (): Task =>
  Task.where("#actor go to Widgets tab", Click.on(cardWidgets()));

export const taskGoToDatePickerTab = (): Task =>
  Task.where("#actor go to Date Picker tab", Click.on(datePickerTab()));

export const taskSelectDate = (dateData: Answerable<any>): Task => {
  return Task.where(
    `#actor select date ${dateData.fullDate}`,
    Click.on(inputDatePickerMonthYear()),
    Select.value(dateData.year).from(selectDateYear()),
    Select.value(dateData.month).from(selectDateMonth()),
    Click.on(selectDateDay(dateData.day))
  );
};

export const taskSelectDateAndTime = (dateData: Answerable<any>): Task => {
  return Task.where(
    `#actor select date ${dateData.fullDate}`,
    Click.on(inputDateAndTimePicker()),
    Select.value(dateData.year).from(selectDateYear()),
    Select.value(dateData.month).from(selectDateMonth()),
    Click.on(selectDateDay(dateData.day))
  );
};

export const taskSelectDateTime = (dateData: Answerable<any>): Task => {
  return Task.where(
    `#actor select date ${dateData.fullDate}`,
    Click.on(inputDateAndTimePicker()),
    interactionSelectDateTimeYear(dateData.year),
    interactionSelectDateTimeMonth(dateData.month),
    Click.on(selectDateTimeDay(dateData.day)),
    Click.on(selectDateTimeTime(dateData.time))
  );
};

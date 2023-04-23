import {By, PageElement} from "@serenity-js/web";

export const datePickerTab = () =>
  PageElement.located(
    By.xpath("//span[text()='Date Picker']/parent::li")
  ).describedAs("Date Picker Tab");

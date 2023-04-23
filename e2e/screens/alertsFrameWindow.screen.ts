import {By, PageElement} from "@serenity-js/web";

export const alertsTab = () =>
  PageElement.located(
    By.xpath("//span[text()='Alerts']/parent::li")
  ).describedAs("Alerts Tab");

import {By, PageElement} from "@serenity-js/web";

export const webTablesTab = () =>
  PageElement.located(
    By.xpath(
      "//span[text()='Web Tables']/parent::li"
    )
  ).describedAs("Web Tables Tab");

import {By, PageElement} from "@serenity-js/web";

export const cardElements = () =>
  PageElement.located(
    By.xpath(
      "//h5[text()='Elements']/ancestor::div[contains(@class, 'top-card')]"
    )
  ).describedAs("Elements Card");

export const cardWidgets = () =>
  PageElement.located(
    By.xpath(
      "//h5[text()='Widgets']/ancestor::div[contains(@class, 'top-card')]"
    )
  ).describedAs("Widgets Card");

export const cardAlertFrameWindows = () =>
  PageElement.located(
    By.xpath(
      "//h5[text()='Alerts, Frame & Windows']/ancestor::div[contains(@class, 'top-card')]"
    )
  ).describedAs("Alert, Frame & Windows Card");

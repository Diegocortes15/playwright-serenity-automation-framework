import {Answerable} from "@serenity-js/core";
import {By, PageElement} from "@serenity-js/web";

export const selectDateYear = () =>
  PageElement.located(By.css(".react-datepicker__year-select")).describedAs(
    "Year Select"
  );

export const selectDateMonth = () =>
  PageElement.located(By.css(".react-datepicker__month-select")).describedAs(
    "Month Select"
  );

export const selectDateDay = (day: Answerable<string>) =>
  PageElement.located(
    By.xpath(
      `//div[contains(@class, 'react-datepicker__day') and not(contains(@class, '--outside')) and (text()='${day}')]`
    )
  ).describedAs(`Day Select ${day}`);

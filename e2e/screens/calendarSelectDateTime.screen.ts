import {Answerable} from "@serenity-js/core";
import {By, PageElement, PageElements} from "@serenity-js/web";

export const selectDateTimeYear = () =>
  PageElement.located(
    By.css(".react-datepicker__year-dropdown-container")
  ).describedAs("Year Select");

export const optionsDateTimeYear = (year: Answerable<string>) =>
  PageElements.located(
    By.xpath(
      `//div[contains(@class, 'react-datepicker__year-option') and (text()='${year}')]`
    )
  ).describedAs(`Year Option ${year}`);

export const optionDateTimeYear = (year: Answerable<string>) =>
  PageElement.located(
    By.xpath(
      `//div[contains(@class, 'react-datepicker__year-option') and (text()='${year}')]`
    )
  ).describedAs(`Year Option ${year}`);

export const buttonSearchNextYear = () =>
  PageElement.located(
    By.css(".react-datepicker__navigation--years-upcoming")
  ).describedAs(`Search Next Year`);

export const buttonSearchPreviousYear = () =>
  PageElement.located(
    By.css(".react-datepicker__navigation--years-previous")
  ).describedAs(`Search Previous Year`);

export const selectDateTimeMonth = () =>
  PageElement.located(
    By.css(".react-datepicker__month-dropdown-container")
  ).describedAs("Month Select");

export const optionDateTimeMonth = (month: Answerable<string>) =>
  PageElement.located(
    By.xpath(
      `//div[contains(@class, 'react-datepicker__month-option') and (text()='${month}')]`
    )
  ).describedAs(`Month Option ${month}`);

export const selectDateTimeDay = (day: Answerable<string>) =>
  PageElement.located(
    By.xpath(
      `//div[contains(@class, 'react-datepicker__day') and (text()='${day}')]`
    )
  ).describedAs(`Day Select ${day}`);

export const selectDateTimeTime = (time: Answerable<string>) =>
  PageElement.located(
    By.xpath(
      `//li[contains(@class, 'react-datepicker__time-list-item') and (text()='${time}')]`
    )
  ).describedAs(`Time Select ${time}`);

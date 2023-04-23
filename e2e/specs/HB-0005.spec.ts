import {describe, it} from "@serenity-js/playwright-test";
import {Navigate} from "@serenity-js/web";
import {Ensure, equals} from "@serenity-js/assertions";
import {
  taskGoToDatePickerTab,
  taskGoToWidgetsCard,
  taskSelectDate,
  taskSelectDateTime,
} from "../tasks";
import {persistedDate, persistedDateTime} from "../questions";
import {readFileSync} from "fs";
import {
  getRandomDate,
  getRandomDateTime,
  getRandomPositiveNumber,
} from "../utils/support-factory.utils";

describe("Date Picker Widget", () => {
  const storyParentId = "HB-0005";

  const testDataTestCase_1 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0006.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_1["testCase"]} |
  Description: ${testDataTestCase_1["testDescription"]} |
  Tags: ${testDataTestCase_1["tags"]}`, async ({actor}) => {
    const dateFormat = "MM/DD/YYYY";
    const dateData = await getRandomDate(dateFormat);
    const expectedDate = dateData.fullDate;
    await actor.attemptsTo(
      Navigate.to("/"),
      taskGoToWidgetsCard(),
      taskGoToDatePickerTab(),
      taskSelectDate(dateData)
    );
    const currentDate = await persistedDate().answeredBy(actor);
    await actor.attemptsTo(Ensure.that(currentDate, equals(expectedDate)));
  });

  const testDataTestCase_2 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0007.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_2["testCase"]} |
  Description: ${testDataTestCase_2["testDescription"]} |
  Tags: ${testDataTestCase_2["tags"]}`, async ({actor}) => {
    const dateFormat = "LLL";
    const dateDataTime = await getRandomDateTime(dateFormat);
    const expectedDate = dateDataTime.fullDate;
    //const expectedDate = "January 27, 1994 12:30 AM";
    await actor.attemptsTo(
      Navigate.to("/"),
      taskGoToWidgetsCard(),
      taskGoToDatePickerTab(),
      taskSelectDateTime(dateDataTime)
    );
    const currentDate = await persistedDateTime().answeredBy(actor);
    await actor.attemptsTo(Ensure.that(currentDate, equals(expectedDate)));
  });
});

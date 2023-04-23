import {describe, it} from "@serenity-js/playwright-test";
import {Navigate} from "@serenity-js/web";
import {Ensure, equals} from "@serenity-js/assertions";
import {
  taskGoToDatePickerTab,
  taskGoToWidgetsCard,
  taskSelectDate,
  taskSelectDateTime,
} from "../tasks";
import {questionDate, questionDateTime} from "../questions";
import {readFileSync} from "fs";
import {
  getRandomDate,
  getRandomDateTime,
} from "../utils/support-factory.utils";
import { actorInTheSpotlight } from "@serenity-js/core";

describe("Date Picker Widget", () => {
  const storyParentId = "HB-0005";

  const testDataTestCase_1 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0006.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_1["testCase"]} |
  Description: ${testDataTestCase_1["testDescription"]} |
  Tags: ${testDataTestCase_1["tags"]}`, async ({actorCalled}) => {
    const data = await testDataTestCase_1;
    const dateFormat = "MM/DD/YYYY";
    const dateData = await getRandomDate(dateFormat);
    const expectedDate = dateData.fullDate;
    await actorCalled(data.actor).attemptsTo(
      Navigate.to("/"),
      taskGoToWidgetsCard(),
      taskGoToDatePickerTab(),
      taskSelectDate(dateData)
    );
    const currentDate = await questionDate().answeredBy(actorInTheSpotlight());
    await actorCalled(data.actor).attemptsTo(Ensure.that(currentDate, equals(expectedDate)));
  });

  const testDataTestCase_2 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0007.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_2["testCase"]} |
  Description: ${testDataTestCase_2["testDescription"]} |
  Tags: ${testDataTestCase_2["tags"]}`, async ({actorCalled}) => {
    const data = await testDataTestCase_2;
    const dateFormat = "LLL";
    const dateDataTime = await getRandomDateTime(dateFormat);
    const expectedDate = dateDataTime.fullDate;
    await actorCalled(data.actor).attemptsTo(
      Navigate.to("/"),
      taskGoToWidgetsCard(),
      taskGoToDatePickerTab(),
      taskSelectDateTime(dateDataTime)
    );
    const currentDate = await questionDateTime().answeredBy(actorInTheSpotlight());
    await actorCalled(data.actor).attemptsTo(Ensure.that(currentDate, equals(expectedDate)));
  });
});

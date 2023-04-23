import {describe, it} from "@serenity-js/playwright-test";
import {Navigate} from "@serenity-js/web";
import {contain, Ensure, not} from "@serenity-js/assertions";
import {
  addRecordTask,
  taskGoToElementsCard,
  taskGoToWebTablesTab,
  taskRemoveRecord,
} from "../tasks";
import {questionNameRecordById, questionNameRecords} from "../questions";
import {readFileSync} from "fs";
import {getRandomPositiveNumber} from "../utils/support-factory.utils";
import {actorInTheSpotlight} from "@serenity-js/core";

describe("Manage Web Tables", () => {
  const storyParentId = "HB-0001";

  const testDataTestCase_1 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0002.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_1["testCase"]} |
  Description: ${testDataTestCase_1["testDescription"]} |
  Tags: ${testDataTestCase_1["tags"]}`, async ({actorCalled}) => {
    const data = await testDataTestCase_1;
    await actorCalled(data.actor).attemptsTo(
      Navigate.to("/"),
      taskGoToElementsCard(),
      taskGoToWebTablesTab(),
      addRecordTask(data.recordInfo),
      Ensure.that(questionNameRecords(), contain(data.recordInfo.firstName))
    );
  });

  const testDataTestCase_2 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0003.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_2["testCase"]} |
  Description: ${testDataTestCase_2["testDescription"]} |
  Tags: ${testDataTestCase_2["tags"]}`, async ({actorCalled}) => {
    const data = await testDataTestCase_2;
    await actorCalled(data.actor).attemptsTo(
      Navigate.to("/"),
      taskGoToElementsCard(),
      taskGoToWebTablesTab()
    );
    const recordIdToRemoveBy: any = await getRandomPositiveNumber(
      await questionNameRecords().length.answeredBy(actorInTheSpotlight())
    );
    const recordName = await questionNameRecordById(
      recordIdToRemoveBy
    ).answeredBy(actorInTheSpotlight());
    await actorInTheSpotlight().attemptsTo(
      taskRemoveRecord(recordIdToRemoveBy),
      Ensure.that(questionNameRecords(), not(contain(recordName)))
    );
  });

  const testDataTestCase_3 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0004.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_3["testCase"]} |
  Description: ${testDataTestCase_3["testDescription"]} |
  Tags: ${testDataTestCase_3["tags"]}`, async ({actorCalled}) => {
    const data = await testDataTestCase_3;
    await actorCalled(data.actor).attemptsTo(
      Navigate.to("/"),
      taskGoToElementsCard(),
      taskGoToWebTablesTab(),
      addRecordTask(data.recordInfo),
      Ensure.that(questionNameRecords(), contain(data.recordInfo.firstName))
    );
    const recordIdToRemoveBy: any = await getRandomPositiveNumber(
      await questionNameRecords().length.answeredBy(actorInTheSpotlight())
    );
    const recordName = await questionNameRecordById(
      recordIdToRemoveBy
    ).answeredBy(actorInTheSpotlight());
    await actorCalled(data.actor).attemptsTo(
      taskRemoveRecord(recordIdToRemoveBy),
      Ensure.that(questionNameRecords(), not(contain(recordName)))
    );
  });
});

import {describe, it} from "@serenity-js/playwright-test";
import {Navigate} from "@serenity-js/web";
import {
  taskClickConfirmModalDialogButton,
  taskClickPromptModalDialogButton,
  taskClickSeeModalDialogButton,
  taskClickTimerModalDialogButton,
  taskGoToAlertsFrameWindowsCard,
  taskGoToAlertsTab,
} from "../tasks";
import {readFileSync} from "fs";
import {
  Ensure,
  contain,
  equals,
  includes,
  isPresent,
} from "@serenity-js/assertions";
import {
  questionModalDialogMessage,
  questionResultConfirmModalDialog,
  questionResultPromptModalDialog,
} from "../questions";

describe("Manage Alerts", () => {
  const storyParentId = "HB-0008";

  const testDataTestCase_1 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0009.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_1["testCase"]} |
  Description: ${testDataTestCase_1["testDescription"]} |
  Tags: ${testDataTestCase_1["tags"]}`, async ({actor}) => {
    const data = await testDataTestCase_1;
    await actor.attemptsTo(
      Navigate.to("/"),
      taskGoToAlertsFrameWindowsCard(),
      taskGoToAlertsTab(),
      taskClickSeeModalDialogButton(),
      Ensure.that(
        questionModalDialogMessage(),
        equals(data.modalDialog.message)
      )
    );
  });

  const testDataTestCase_2 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0010.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_2["testCase"]} |
  Description: ${testDataTestCase_2["testDescription"]} |
  Tags: ${testDataTestCase_2["tags"]}`, async ({actor}) => {
    const data = await testDataTestCase_2;
    await actor.attemptsTo(
      Navigate.to("/"),
      taskGoToAlertsFrameWindowsCard(),
      taskGoToAlertsTab(),
      taskClickTimerModalDialogButton(),
      Ensure.that(
        questionModalDialogMessage(),
        equals(data.modalDialog.message)
      )
    );
  });

  const testDataTestCase_3 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0011.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_3["testCase"]} |
  Description: ${testDataTestCase_3["testDescription"]} |
  Tags: ${testDataTestCase_3["tags"]}`, async ({actor}) => {
    const data = await testDataTestCase_3;
    await actor.attemptsTo(
      Navigate.to("/"),
      taskGoToAlertsFrameWindowsCard(),
      taskGoToAlertsTab(),
      taskClickConfirmModalDialogButton(data.modalDialog.option),
      Ensure.that(
        questionResultConfirmModalDialog(),
        equals(data.modalDialog.message)
      )
    );
  });

  const testDataTestCase_4 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0012.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_4["testCase"]} |
  Description: ${testDataTestCase_4["testDescription"]} |
  Tags: ${testDataTestCase_4["tags"]}`, async ({actor}) => {
    const data = await testDataTestCase_4;
    await actor.attemptsTo(
      Navigate.to("/"),
      taskGoToAlertsFrameWindowsCard(),
      taskGoToAlertsTab(),
      taskClickConfirmModalDialogButton(data.modalDialog.option),
      Ensure.that(
        questionResultConfirmModalDialog(),
        equals(data.modalDialog.message)
      )
    );
  });

  const testDataTestCase_5 = JSON.parse(
    readFileSync(`./e2e/data/${storyParentId}/HB-0013.json`, "utf-8")
  );
  it(`Test case: ${testDataTestCase_5["testCase"]} |
  Description: ${testDataTestCase_5["testDescription"]} |
  Tags: ${testDataTestCase_5["tags"]}`, async ({actor}) => {
    const data = await testDataTestCase_5;
    await actor.attemptsTo(
      Navigate.to("/"),
      taskGoToAlertsFrameWindowsCard(),
      taskGoToAlertsTab(),
      taskClickPromptModalDialogButton(data.modalDialog.prompt),
      Ensure.that(
        questionResultPromptModalDialog(),
        includes(data.modalDialog.prompt)
      )
    );
  });
});

import {By, PageElement} from "@serenity-js/web";

export const buttonSeeModalDialog = () =>
  PageElement.located(By.id("alertButton")).describedAs("Alert Button");

export const buttonTimerModalDialog = () =>
  PageElement.located(By.id("timerAlertButton")).describedAs(
    "Timer ModalDialog Button"
  );

export const buttonConfirmModalDialog = () =>
  PageElement.located(By.id("confirmButton")).describedAs(
    "Confirm ModalDialog Button"
  );

export const textResultConfirmModalDialog = () =>
  PageElement.located(By.id("confirmResult")).describedAs(
    "Result Text Confirm ModalDialog"
  );

export const buttonPromptModalDialog = () =>
  PageElement.located(By.id("promtButton")).describedAs("Prompt ModalDialog");

export const textResultPromptModalDialog = () =>
  PageElement.located(By.id("promptResult")).describedAs(
    "Result Text Prompt ModalDialog"
  );

import {Interaction, actorInTheSpotlight} from "@serenity-js/core";
import {getCurrentYear} from "./utils/support-factory.utils";
import {persistedDateTimeYear} from "./questions";
import {
  buttonSearchNextYear,
  buttonSearchPreviousYear,
  optionDateTimeMonth,
  optionDateTimeYear,
  selectDateTimeMonth,
  selectDateTimeYear,
} from "./screens/calendarSelectDateTime.screen";
import {Click} from "@serenity-js/web";

export const interactionSelectDateTimeYear = (year: string): Interaction => {
  return Interaction.where(`#actor select year ${year}`, async () => {
    await Click.on(selectDateTimeYear()).performAs(actorInTheSpotlight());
    await interactionSearchDateTimeYear(year).performAs(actorInTheSpotlight());
  });
};

export const interactionSearchDateTimeYear = (year: string): Interaction => {
  return Interaction.where(`#actor search year ${year}`, async () => {
    const currentYear = await getCurrentYear();
    if (
      (await persistedDateTimeYear(year).answeredBy(actorInTheSpotlight())) != 0
    ) {
      await Click.on(optionDateTimeYear(year)).performAs(actorInTheSpotlight());
    } else {
      if (Number(year) < currentYear) {
        await Click.on(buttonSearchPreviousYear()).performAs(
          actorInTheSpotlight()
        );
        await interactionSearchDateTimeYear(year).performAs(
          actorInTheSpotlight()
        );
      } else {
        await Click.on(buttonSearchNextYear()).performAs(actorInTheSpotlight());
        await interactionSearchDateTimeYear(year).performAs(
          actorInTheSpotlight()
        );
      }
    }
  });
};

export const interactionSelectDateTimeMonth = (month: string): Interaction => {
  return Interaction.where(`#actor select month ${month}`, async () => {
    await Click.on(selectDateTimeMonth()).performAs(actorInTheSpotlight());
    await Click.on(optionDateTimeMonth(month)).performAs(actorInTheSpotlight());
  });
};

export const interactionSelectDateTimeDay = (day: string): Interaction => {
  return Interaction.where(`#actor select day ${day}`, async () => {
    await Click.on(selectDateTimeMonth()).performAs(actorInTheSpotlight());
    await Click.on(optionDateTimeMonth(day)).performAs(actorInTheSpotlight());
  });
};

import {By, PageElement} from "@serenity-js/web";

export const inputFirstName = () =>
  PageElement.located(By.id("firstName")).describedAs("First Name Input");

export const inputLastName = () =>
  PageElement.located(By.id("lastName")).describedAs("Last Name Input");

export const inputEmail = () =>
  PageElement.located(By.id("userEmail")).describedAs("Email Input");

export const inputAge = () =>
  PageElement.located(By.id("age")).describedAs("Age Input");

export const inputSalary = () =>
  PageElement.located(By.id("salary")).describedAs("Salary Input");

export const inputDepartment = () =>
  PageElement.located(By.id("department")).describedAs("Department Input");

export const buttonSubmit = () =>
  PageElement.located(By.id("submit")).describedAs("Submit Button");

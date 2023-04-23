# habi-automation-challenge

Habi Automation Challenge - Screenplay

## Technologies Used

[Playwright](https://playwright.dev/) and [SerenityJs](https://serenity-js.org/) is a powerful combination of technologies for web application testing. It provides reliable and maintainable automated testing with Playwright for browser automation and SerenityJs for testing framework.

## Screenplay Pattern

## Installation

To get started with this project, you'll need to have Node.js and Git installed on your machine.

First, clone the repository:

```bash
git clone https://github.com/username/playwright-project.git
```

Once you have cloned the repository, navigate to the project directory:

```bash
cd playwright-project
```

Then, install the project dependencies using npm:

```bash
npm install
```

Run, the following command to set some depencies needed after install like `rimraf` is a Node.js package that provides a cross-platform command line interface (CLI) for deleting files and directories.

```bash
npm run postinstall
```

## Running the tests

To run all tests and open serenity report

```bash
npm run test
```

To run all tests without open serenity test:execute

```bash
npm run test:execute
```

To open serenity report

```bash
npm run test:report
```

To clean old serenity reports

```bash
npm run clean
```

> **Note**
> If you are using _`npm run test:execute`_ or _`npm run test`_, this command is required.

To run test cases by tags

```bash
npx playwright test -g "@hb-0001"
```

Tags that you can use

| 📘 Test Case | 📗 Story    | 📓 Others      |
| ------------ | ----------- | -------------- |
| 1️⃣ @hb-0002  | 📗 @hb-0001 | 🌀 @regression |
| 1️⃣ @hb-0003  | 📗 @hb-0005 |                |
| 1️⃣ @hb-0004  | 📗 @hb-0008 |                |
| 2️⃣ @hb-0006  |             |                |
| 2️⃣ @hb-0007  |             |                |
| 3️⃣ @hb-0009  |             |                |
| 3️⃣ @hb-0010  |             |                |
| 3️⃣ @hb-0011  |             |                |
| 3️⃣ @hb-0012  |             |                |
| 3️⃣ @hb-0013  |             |                |

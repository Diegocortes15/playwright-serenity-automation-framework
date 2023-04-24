//import {defineConfig, devices} from "@playwright/test";
import type {PlaywrightTestConfig} from "@serenity-js/playwright-test";
import {devices} from "@playwright/test";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: "./e2e/specs",
  timeout: 2 * 1000 * 60,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30_000,
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: "html",
  reporter: [
    ["line"],
    ["html", {open: "never"}],
    [
      "@serenity-js/playwright-test",
      {
        crew: [
          "@serenity-js/console-reporter",
          "@serenity-js/serenity-bdd",
          [
            "@serenity-js/core:ArtifactArchiver",
            {outputDirectory: "target/site/serenity"},
          ],
          // '@serenity-js/core:StreamReporter',  // use for debugging
        ],
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    defaultActorName: "User Actor",
    crew: [
      // [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' } ]
      ["@serenity-js/web:Photographer", {strategy: "TakePhotosOfInteractions"}],
    ],
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://demoqa.com/",
    headless: true,
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: "on",
    //video: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {...devices["Desktop Chrome"]},
    },

    {
      name: "firefox",
      use: {...devices["Desktop Firefox"]},
    },

    {
      name: "webkit",
      use: {...devices["Desktop Safari"]},
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};

export default config;

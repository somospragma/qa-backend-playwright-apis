import { defineConfig } from '@playwright/test';
import { config } from 'dotenv';


config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.URL,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },
});

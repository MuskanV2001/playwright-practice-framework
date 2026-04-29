import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: './src/features/E2E_PlacingOrder.feature',
  steps: ['./src/step-definitions/*.ts', 
    './src/fixtures/appFixtures.ts',
    './src/utils/hooks/common.ts'],
  outputDir: 'test-specs'
});

export default defineConfig({
  testDir,

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['dot'],
    ['html'],
    ['json' , { outputFile: 'test-results/cucumber-report.json'}],
    ['allure-playwright']
  ],

  use: {
    headless: false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]

});

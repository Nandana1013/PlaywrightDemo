import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.spec\.ts/,
    },
    {
      //name: 'chromium',
      //dependencies: ['setup'],
      use: {

        ...devices['Desktop Chrome'],
        baseURL: 'https://opensource-demo.orangehrmlive.com/',
        headless: true,
        storageState: 'src/auth/auth.json',
      },
    },
  ],
});

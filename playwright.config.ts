import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  globalSetup: require.resolve('./tests/global.setup.spec.ts'),

  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    headless: false,
    storageState: 'src/auth/auth.json',
  },
});
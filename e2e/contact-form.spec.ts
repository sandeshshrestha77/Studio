import { test, expect } from '@playwright/test';

test('contact form validation works correctly', async ({ page }) => {
  await page.goto('/contact');
  
  // Try to submit empty form
  await page.click('button[type="submit"]');
  await expect(page.getByText('First name must be at least 2 characters')).toBeVisible();
  
  // Fill form with valid data
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="email"]', 'john@example.com');
  await page.fill('input[name="phone"]', '1234567890');
  await page.fill('input[name="subject"]', 'Test Subject');
  await page.fill('textarea[name="message"]', 'This is a test message');
  
  // Submit form
  await page.click('button[type="submit"]');
  
  // Check success message
  await expect(page.getByText('Your message has been sent')).toBeVisible();
});

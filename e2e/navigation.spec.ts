import { test, expect } from '@playwright/test';

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if logo is visible
  await expect(page.getByText('Studio Spark')).toBeVisible();
  
  // Navigate to About page
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
  
  // Navigate to Services page
  await page.click('text=Services');
  await expect(page).toHaveURL('/services');
  
  // Navigate to Contact page
  await page.click('text=Contact Us');
  await expect(page).toHaveURL('/contact');
});

test('mobile menu works correctly', async ({ page }) => {
  // Set viewport to mobile size
  await page.setViewportSize({ width: 375, height: 667 });
  
  await page.goto('/');
  
  // Open mobile menu
  await page.click('button[aria-label="Menu"]');
  
  // Check if mobile menu items are visible
  await expect(page.getByText('About')).toBeVisible();
  await expect(page.getByText('Services')).toBeVisible();
  await expect(page.getByText('Portfolio')).toBeVisible();
  
  // Navigate using mobile menu
  await page.click('text=About');
  await expect(page).toHaveURL('/about');
  
  // Check if menu closes after navigation
  await expect(page.getByText('Services')).not.toBeVisible();
});

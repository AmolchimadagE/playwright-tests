import { test, expect } from '@playwright/test';

test.describe('Registation test', () => {

  test('User has been register', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/');
    await expect(page).toHaveTitle(/ParaBank | Welcome/);
    await page.getByText('Register').click();
    await expect(page.locator('h1')).toHaveText(/Signing up is easy!/);
    await page.locator('input[name="customer.firstName"]').fill('Kanchan');
    await page.locator('input[name="customer.lastName"]').fill('Kumar');
    await page.locator('input[name="customer.address.street"]').fill('123 Main St');
    await page.locator('input[name="customer.address.city"]').fill('New York');
    await page.locator('input[name="customer.address.state"]').fill('NY');
    await page.locator('input[name="customer.address.zipCode"]').fill('10001');
    await page.locator('input[name="customer.phoneNumber"]').fill('1234567890');
    await page.locator('input[name="customer.ssn"]').fill('123-45-6789');
    await page.locator('input[name="customer.username"]').fill('kanchan123');
    await page.locator('input[name="customer.password"]').fill('password123');
    await page.locator('input[name="repeatedPassword"]').fill('password123');
    await page.getByRole('button', { name: 'Register' }).click();
  });

  test('Login Test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/');
    await page.locator('input[name="username"]').fill('kanchan123');
    await page.locator('input[name="password"]').fill('password123');
    await page.getByRole('button', { name: 'Log In' }).click();
    
  });

test('Logout Test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');
  await page.locator('input[name="username"]').fill('kanchan123');
  await page.locator('input[name="password"]').fill('password123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page).toHaveTitle(/ParaBank \| Welcome/);
});

test('Take Screenshots', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');
  await page.screenshot({path: 'screenshots/homepage.png', fullPage: true});
})

});

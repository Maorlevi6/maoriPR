import { test, expect } from '@playwright/test';
import LoginPage from '../pages/logInPage';
import ProductsPage from '../pages/productsPage';

test.describe.only('tests describes', () => {


  let loginPage: LoginPage;
  let productsPage: ProductsPage; 



  test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  productsPage = new ProductsPage(page)

    await page.goto('https://www.saucedemo.com/');
  })
  test('test', async ({ page }) => {
  await loginPage.logInToApp('standard_user','secret_sauce')
  await productsPage.validedTitle('Products')
  await productsPage.changeValueInDropDown('Price (low to high)')
  await expect(page.locator('[data-test="product_sort_container"]')).toContainText('Price (low to high)')
 
  });


})

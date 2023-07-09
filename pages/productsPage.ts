import { Locator, Page, expect } from "@playwright/test";

export default class  ProductsPage{
   
   private pageTitle: Locator;
  private filterInDropDown: Locator;
   
    constructor(page: Page ){
        this.pageTitle = page.locator('[class="title"]')
        this.filterInDropDown = page.locator('[data-test="product_sort_container"]')
    }



public async validedTitle(expectTitle: string) {
    await expect(this.pageTitle).toContainText(expectTitle)

}

public async changeValueInDropDown(expectValue: string){
    await this.filterInDropDown.selectOption(expectValue)
}

}
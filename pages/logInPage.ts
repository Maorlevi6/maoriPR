import { Locator, Page } from "@playwright/test";

export default class  LoginPage{
   
   private usernameTextField: Locator;
   private passwordtTextField: Locator
   private loginButton: Locator
   
    constructor(page: Page ){
        this.usernameTextField = page.locator('[data-test="username"]')
         this.passwordtTextField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        
    }



public async logInToApp(username: string, password: string) {
    await this.usernameTextField.fill(username)
    await this.passwordtTextField.type(password,{delay: 100})
    await this.loginButton.click()


}

}
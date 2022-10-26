const generalPage = require("./Page")

const loginButton = 'header a:nth-child(4)'
const emailField = '[aria-label="loginForm"] [name="email"]'
const passwordField = '[type="password"]'
const rememberCheck = '[role="img"]'
const submitButton = '[aria-label="loginForm"] [type="submit"]'
const errorMessage = '[type="error"]'
const resetPassLink = '[href="/#/login/password-reset"]'
const ressPassEmailField = '[name="email"]'
const resetPassbutton = 'div [type="submit"]'
const resetPassMessage = '[data-testid="login.pwreset.message"]'


class LoginPage {
 
    async clickLogin(){ 
        await generalPage.clickElement(loginButton)
    }
    async clickResetPass(){ 
        await generalPage.clickElement(resetPassLink)
    }
    async loginUser(userEmail, userPassword) {
        await generalPage.addValue(emailField, userEmail)
        await generalPage.addValue(passwordField, userPassword)
        await generalPage.clickElement(rememberCheck)
        await generalPage.clickElement(submitButton)
    }
    async userResetPass(userEmail) {
        await generalPage.addValue(ressPassEmailField, userEmail)
        await generalPage.clickElement(resetPassbutton)
    }
    async errorMessageVisible(){
        return (await generalPage.getElement(errorMessage))
    }
    async resPassMessageVisible(){
        return (await generalPage.getElement(resetPassMessage))
    }

}
module.exports = new LoginPage()
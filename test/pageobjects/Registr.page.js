const generalPage = require("./Page")

const signupButton = 'li div [href="/sign-up"]'
const emailField = '#email'
const fullNameField = '#full_name'
const passwordField = '#password'
const checkbox = '[aria-labelledby="terms-label"] rect'
const checkbox2 = '[style="position:relative"] rect'
const submitButton = '[type="submit"]'
const errorMessage = '#signup-form_error span'
const validatMessage = '#__next main h1'

class RegistrPage {

    async clickSignup(){ 
        await generalPage.clickElement(signupButton)
    }
    async registrUser(userEmail, fullName, userPassword) {
        await generalPage.addValue(emailField, userEmail)
        await generalPage.addValue(fullNameField, fullName)
        await generalPage.addValue(passwordField, userPassword)
        await generalPage.clickElement(checkbox)
        await generalPage.clickElement(checkbox2)
        await generalPage.clickElement(submitButton)
      }
    async errorMessageVisible(){
        return (await generalPage.getElement(errorMessage))
    }
    async validatMessageExpect(){
        return (await generalPage.getElement(validatMessage))
    }
    
}
module.exports = new RegistrPage()



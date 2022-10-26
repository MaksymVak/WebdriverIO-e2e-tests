const generalPage = require("./Page")

const productMenu = 'span*=Products'
const waitlistLink = 'span*=Storage'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const emailField = '#Email'
const submitButton = '[type="submit"]'
const validatTitle = 'main h1'
const waitlistForm = '#__next div.sc-2e7b2fa9-0.eiIMbO main div.sc-31a8cefb-0.gFMACo div div.sc-31a8cefb-9.fJEUzb div.sc-31a8cefb-10.jnwLUb div a'

class WaitlistPage {

    async goJoinWaitlistLink () {
        await generalPage.moveToElement(productMenu)
        await generalPage.clickElement(waitlistLink)
        await generalPage.clickElement(waitlistForm)
    }

    async fillField (firstName, lastName, email) {
        await generalPage.setValue(firstNameField, firstName)
        await generalPage.setValue(lastNameField, lastName)
        await generalPage.setValue(emailField, email)
        await generalPage.clickElement(submitButton)
    }

    async validatTitleText(){
        return (await generalPage.getElement(validatTitle))
    }
}
module.exports = new WaitlistPage()
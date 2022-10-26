const generalPage = require("./Page")

const contactButton = 'li [href="/contact-us"]'
const selectContact = 'select#Reason_for_Contact__c'
const contactValue = 'Support'
const firstNameField = '#FirstName'
const lastNameField = '#LastName'
const emailField = '#Email'
const selectCountryPhon = 'select#Phone_Number_Extension__c'
const countryPhonValue = '+380'
const phonNumber = '#Phone_Number_Base__c'
const websiteField = '#Website'
const addInfoForm = '#Form_Additional_Information__c'
const checkbox = '#mktoCheckbox_11358_0'
const submitButton = '[type="submit"]'
const validatMessage = 'h1'


class TalkexpertPage {
 
    async clickTalkexpert(){ 
        await generalPage.clickElement(contactButton)
    }
    async fillUserForm(firstName, lastName, userEmail, phon, website, info) {
        await generalPage.selectDropmenu(selectContact, contactValue)
        await generalPage.addValue(firstNameField, firstName)
        await generalPage.addValue(lastNameField, lastName)
        await generalPage.addValue(emailField, userEmail)
        await generalPage.selectDropmenu(selectCountryPhon, countryPhonValue)
        await generalPage.addValue(phonNumber, phon)
        await generalPage.addValue(websiteField, website)
        await generalPage.addValue(addInfoForm, info)
        await generalPage.clickElement(checkbox)
        await generalPage.clickElement(submitButton)
    }
    async validatMessageExpect(){
        return (await generalPage.getElement(validatMessage))
    }

}
module.exports = new TalkexpertPage()
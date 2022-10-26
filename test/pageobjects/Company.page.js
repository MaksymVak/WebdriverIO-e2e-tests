const generalPage = require("./Page")

const aboutLink = 'footer [href="/company/about"]'
const dataPrivacyLink = 'footer [href="/company/data-privacy"]'
const reportAbuseLink = 'footer [href="/report-abuse"]'
const privatPoliceLink = 'footer [href="/privacy-policy"]'
const validatMessage = 'header h1'
const subjectField = '[label="Subject"]'
const phoneField = '[label="Phone Number (Abusive)"]'
const phoneRecField = '[label="Phone Number (Received Abuse)"]'
const fullNameField = '[label="Full Name (optional)"]'
const voicetButton = '[for="serviceAbusedVoice"]'
const submitButton = '[type="submit"]'
const errorMessage = '[role="alert"] [type="danger"]'

class CompanyPage {

    async fillRepForm (subject, phone, phonRecAbus, fullName) {
        await generalPage.addValue(subjectField, subject)
        await generalPage.addValue(phoneField, phone)
        await generalPage.addValue(phoneRecField, phonRecAbus)
        await generalPage.addValue(fullNameField, fullName)
        await generalPage.clickElement(voicetButton)
        await generalPage.clickElement(submitButton)
    }
    async goAboutUs () {
        await generalPage.clickElement(aboutLink)
    }
    async goReportAbuse () {
        await generalPage.clickElement(reportAbuseLink)
    }
    async goDataPrivacy () {
        await generalPage.clickElement(dataPrivacyLink)
    }
    async goPrivatePolice () {
        await generalPage.clickElement(privatPoliceLink)
    }
    async validatMessageExpect(){
        return (await generalPage.getElement(validatMessage))
    }
    async validatErrorMessage(){
        return (await generalPage.getElement(errorMessage))
    }
}
module.exports = new CompanyPage()
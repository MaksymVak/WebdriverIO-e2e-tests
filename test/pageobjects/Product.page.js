const generalPage = require("./Page")

const sipTrunksLink = 'footer [href="/products/sip-trunks"]'
const voiceApiLink = 'footer [href="/products/voice-api"]'
const numberLookupLink = 'footer [href="/number-lookup"]'
const allProductLink = 'footer [href="/products"]'
const validatTitle = 'header h1'
const faxApi = 'main [href="/products/fax-api"]'
const titleFaxApi = 'main h1'


class ProductPage {

    async gosipTrunks () {
        await generalPage.clickElement(sipTrunksLink)
    }
    async goVoiseApi () {
        await generalPage.clickElement(voiceApiLink)
    }
    async goNumberLookup () {
        await generalPage.clickElement(numberLookupLink)
    }
    async goFaxApi () {
        await generalPage.clickElement(allProductLink)
        await generalPage.clickElement(faxApi)
    }

    async validatTitleText(){
        return (await generalPage.getElement(validatTitle))
    }
    async validatTitleFaxApiText(){
        return (await generalPage.getElement(titleFaxApi))
    }
}
module.exports = new ProductPage()
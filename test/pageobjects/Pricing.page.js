const generalPage = require("./Page")

const menuLocator = 'button span svg'
const trunkPLink = 'footer [href="/pricing/elastic-sip"] span span'
const dropMenuIndex = '[href="/pricing/elastic-sip/ua"]'
const validatMessage = 'h1 span'

class TrunkPricingPage {

    async goTrunkPricing () {
        await generalPage.clickElement(trunkPLink)
    }

    async selectDropMenu (){
        await generalPage.clickElement(menuLocator)
        await generalPage.clickElement(dropMenuIndex)
    }
    async validatMessageExpect(){
        return (await generalPage.getElement(validatMessage))
    }
}
module.exports = new TrunkPricingPage()
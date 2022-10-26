const cookieReset = require("../../helper/cookie")
const generalPage = require("../pageobjects/Page")
const trunkPricingPage = require("../pageobjects/Pricing.page")
const baseUrl = process.env.Base_URL

before('Browser start',async () => {
    await generalPage.visit(baseUrl)
    await cookieReset.cookieWindowReset()
})

describe('Pricing - function test', () => {

    it('Elastic SIP Trunking pricing', async () => {
        await trunkPricingPage.goTrunkPricing()
        await trunkPricingPage.selectDropMenu()
        await expect(trunkPricingPage.validatMessageExpect()).toHaveTextContaining("Ukraine")
    })
})

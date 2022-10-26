const cookieReset = require("../../helper/cookie")
const generalPage = require("../pageobjects/Page")
const waitlistPage = require("../pageobjects/Waitlist.page")
const randomData = require ('../../helper/randomdata')
const baseUrl = process.env.Base_URL

before('Browser start',async () => {
    await generalPage.visit(baseUrl)
    await cookieReset.cookieWindowReset()
})

describe('Waitlist - link testing', () => {

    it('Waitlist - functionality check', async () => {
        await waitlistPage.goJoinWaitlistLink()
        await waitlistPage.fillField(randomData.randomstring(10), randomData.randomstring(10), randomData.makeEmail())
        await expect(waitlistPage.validatTitleText()).toHaveTextContaining("You're on the waitlist!")
    })
})

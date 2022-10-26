const cookieReset = require("../../helper/cookie")
const generalPage = require("../pageobjects/Page")
const callUs = require("../pageobjects/Callus.page")
const baseUrl = process.env.Base_URL

before('Browser start',async () => {
    await generalPage.visit(baseUrl)
    await cookieReset.cookieWindowReset()
})

describe('Call Us - link testing', () => {

    it('Checking the visibility of phone button', async () => {
        await callUs.openCallUsMenu()
        await expect(callUs.visibleButton()).toBeDisplayed()
    })
})
const randomdata = require("../../helper/randomdata")
const cookieReset = require("../../helper/cookie")
const generalPage = require("../pageobjects/Page")
const registrPage = require("../pageobjects/Registr.page")
const loginPage = require("../pageobjects/Login.page")
const talkexpertPage = require("../pageobjects/Talkexpert.page")
const phon = '1112233'
const website = 'http://www.example.com/'
const baseUrl = process.env.Base_URL

before('Browser start',async () => {
    await generalPage.visit(baseUrl)
    await cookieReset.cookieWindowReset()
})
beforeEach('Browser restart',async () => {
    await generalPage.visit(baseUrl)
})

describe('Login testing', () => {

    it('Registration on the website with invalid email', async () => {
        await registrPage.clickSignup()
        await registrPage.registrUser(randomdata.makeEmail(), randomdata.randomstring(10), "^"+randomdata.randomstring(25))
        await expect(await registrPage.errorMessageVisible()).toBeDisplayed()
    })
    it('Registration on the website with valid email', async () => {
        await registrPage.clickSignup()
        await registrPage.registrUser("ivan."+randomdata.randomstring(5)+"@gmail.com", randomdata.randomstring(10), "^"+randomdata.randomstring(25))
        await expect(await registrPage.validatMessageExpect()).toHaveTextContaining("Create a free account")
    })
    it('Authorization on the website', async () => {
        await loginPage.clickLogin()
        await loginPage.loginUser(randomdata.makeEmail(), randomdata.randomstring(10))
        await expect(await loginPage.errorMessageVisible()).toBeDisplayed()
    })
    it('Password reset', async () => {
        await loginPage.clickLogin()
        await loginPage.clickResetPass()
        await loginPage.userResetPass(randomdata.makeEmail())
        await expect(await loginPage.resPassMessageVisible()).toBeDisplayed()
    })
    it('Sending a message using a function Talk to an expert', async () => {
        await talkexpertPage.clickTalkexpert()
        await talkexpertPage.fillUserForm(randomdata.randomstring(10), randomdata.randomstring(10), randomdata.makeEmail(), phon, website, randomdata.randomstring(100))
        await expect(await talkexpertPage.validatMessageExpect()).toHaveTextContaining("Thanks for Reaching Out!")
    })
})
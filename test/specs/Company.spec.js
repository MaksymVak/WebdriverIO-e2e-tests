const cookieReset = require("../../helper/cookie")
const generalPage = require("../pageobjects/Page")
const companyPage = require("../pageobjects/Company.page")
const companyEnv = require('../../environments/Company.json')
const baseUrl = process.env.Base_URL


before('Browser start',async () => {
    await generalPage.visit(baseUrl)
    await cookieReset.cookieWindowReset()
})
beforeEach('Browser restart',async () => {
    await generalPage.visit(baseUrl)
})

describe('Company - link testing', () => {

    it('About Us checking texts and addresses', async () => {
        await companyPage.goAboutUs()
        await expect(companyPage.validatMessageExpect()).toHaveTextContaining('Unlocking the power of intelligent connectivity')
         for (let i = 0; i < companyEnv.citys.length; i++){
            await expect(await $(companyEnv.citys[i].city)).toBeDisplayed()
        } 
    })

    it('Data & Privacy following links', async () => {
        await companyPage.goDataPrivacy()
         for (let i = 0; i < companyEnv.titles.length; i++){
            await expect(await $(companyEnv.titles[1].title)).toBeDisplayed()
        } 
    })

    it('Report Abuse filling out the form', async () => {
        await companyPage.goReportAbuse()
        await companyPage.fillRepForm('Testing', '1111111111', '2222222222', 'Ivanco')
        await expect(await companyPage.validatErrorMessage()).toBeDisplayed()
    })

    it('Checking page url Privacy Policy', async () => {
        await companyPage.goPrivatePolice()
        await expect(browser).toHaveUrlContaining('/privacy-policy')
    })

})
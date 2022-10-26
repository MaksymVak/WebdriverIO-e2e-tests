const cookieReset = require("../../helper/cookie")
const generalPage = require("../pageobjects/Page")
const resourcesPage = require("../pageobjects/Resources.page")
const resourseEnv = require('../../environments/Resources.json')
const baseUrl = process.env.Base_URL

before('Browser start',async () => {
    await generalPage.visit(baseUrl)
    await cookieReset.cookieWindowReset()
})
beforeEach('Browser restart',async () => {
    await generalPage.visit(baseUrl)
})

describe('Resources - link testing', () => {

    it('Testing the blog filter', async () => {
        await resourcesPage.goResources()
        await resourcesPage.selectResourcesProduct()
        await resourcesPage.selectResourcesContent()
        await expect(resourcesPage.validatTitleText()).toHaveTextContaining("GUIDES & TUTORIALS")
    })

    it('Checking links and news feed texts', async () => {
        await resourcesPage.goReleaseNotes()
        await expect(browser).toHaveUrlContaining('/release-notes')
        await expect(resourcesPage.releaseNotesTitleIext()).toHaveTextContaining("Release Notes")
    })

    it('Resource Hub page title check', async () => {
        await resourcesPage.goResourcesHub()
        for (let i = 0; i < resourseEnv.length; i++){
        await expect(await $(resourseEnv[i].title)).toHaveTextContaining(resourseEnv[i].textVal)
        }
    })
})
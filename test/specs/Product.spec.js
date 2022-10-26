const cookieReset = require("../../helper/cookie")
const generalPage = require("../pageobjects/Page")
const productPage = require("../pageobjects/Product.page")
const productEnv = require('../../environments/Product.json')
const baseUrl = process.env.Base_URL

before('Browser start',async () => {
    await generalPage.visit(baseUrl)
    await cookieReset.cookieWindowReset()
})
beforeEach('Browser restart',async () => {
    await generalPage.visit(baseUrl)
})

describe('Product - link and text testing', () => {

    it('Elastic SIP Trunking - Whatever you need, build it with Telnyx', async () => {
        await productPage.gosipTrunks()
         for (let i = 0; i < productEnv.links.length; i++){
            await $(productEnv.links[i].link).click(),
            await expect(browser).toHaveTitleContaining(productEnv.links[i].title),
            await generalPage.clickBack()   
        }
    })

    it('Voice Api - Build exactly what you need for your use-case', async () => {
        await productPage.goVoiseApi()
            for (let i = 0; i < productEnv.linksV.length; i++){
            await $(productEnv.linksV[i].link).click(),
            await expect(await $(productEnv.linksV[i].title)).toBeDisplayed()  
        }
    })

    it('Voice Api - All your business needs, in one API', async () => {
        await productPage.goVoiseApi()
        for (let i = 0; i < productEnv.linksVApi.length; i++){
            await $(productEnv.linksVApi[i].link).click(),
            await expect(browser).toHaveTitleContaining(productEnv.linksVApi[i].title),
            await generalPage.clickBack()   
        }
    })

    it('Number Lookup - What can you build with the Telnyx Lookup API', async () => {
        await productPage.goNumberLookup()
        for (let i = 0; i < productEnv.linksLook.length; i++){
            await $(productEnv.linksLook[i].link).click(),
            await expect(browser).toHaveTitleContaining(productEnv.linksLook[i].title),
            await generalPage.clickBack()   
        }
    })
    it('Fax Api - Check link and page title', async () => {
        await productPage.goFaxApi()
        await expect(browser).toHaveUrlContaining('fax-api')
        await expect(browser).toHaveTitle("Programmable Fax API - FoIP Service Provider | Telnyx")
    })
})
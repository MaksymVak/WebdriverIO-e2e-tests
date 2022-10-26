const generalPage = require("./Page")

const resourcesLink = 'footer [href="/resources"]'
const resourcesHubLink = 'footer [href="/learn"]'
const releaseNotesLink = 'footer [href="/release-notes"]'
const linkFilterProduct = 'button*=Verify API'
const linkFilterContent = 'button*=Guides & Tutorials'
const validatTitle = '#articles a:nth-child(1) header span span'
const validatText = 'a h3'
const releaseNotesTitle = 'header h1'
const releaseNotesFilter = 'aside'
const releaseFilterTitle = 'Filter Release Notes by Product'



class ResourcesPage {

    async goResources () {
        await generalPage.clickElement(resourcesLink)
    }
    async goResourcesHub () {
        await generalPage.clickElement(resourcesHubLink)
    }
    async goReleaseNotes () {
        await generalPage.clickElement(releaseNotesLink)
    }
    async selectResourcesProduct () {
        await generalPage.clickElement(linkFilterProduct)
    }
    async selectResourcesContent () {
        await generalPage.clickElement(linkFilterContent)
    }
    async validatTitleText(){
        return (await generalPage.getElement(validatTitle))
    }
    async validatHubTitleText(){
        return (await generalPage.getAllElement(validatText))
    }
    async releaseNotesTitleIext(){
        return (await generalPage.getElement(releaseNotesTitle))
    }
    async visibleReleaseNotesFilter(){
        return (await generalPage.getElement(releaseNotesFilter, releaseFilterTitle))
    }

}
module.exports = new ResourcesPage()
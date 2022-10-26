const generalPage = require("./Page")

const callUsLink = 'button*=Call Us'
const validatButton = 'button*=Call Sales'

class CallUsPage {

    async openCallUsMenu () {
        await generalPage.clickElement(callUsLink)
    }

    async visibleButton(){
        return (await generalPage.getElement(validatButton))
    }
}
module.exports = new CallUsPage()

class MainPage {

    async visit(element) {
        await browser.url(element)
    }

    async getElement(element) {
        return await $(element)
    }

    async getAllElement(element) {
        return await $$(element)
    }

    async isElementDisplayed(element) {
        return (await this.getElement(element)).isDisplayed()
    }

    async clickElement(element) {
        await (await this.getElement(element)).click()
    }

    async selectDropmenu(element, text) {
        await (await this.getElement(element)).selectByVisibleText(text)
    }

    async setValue(element, value) {
        await (await this.getElement(element)).setValue(value)
    }

    async addValue(element, value) {
        await (await this.getElement(element)).addValue(value)
    }

    async clearValue(element) {
        await (await this.getElement(element)).clearValue()
    }

    async clickBack() {
        await browser.back()
    }

    async clickEnterKey() {
        await browser.keys("\uE007")
    }

    async moveToElement(element) {
        await $(element).moveTo()
    }
}

module.exports = new MainPage();
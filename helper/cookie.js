class CookieReset {

    async cookieWindowReset(){
    await $('[aria-label="close and deny"]').click()
    }

}
module.exports = new CookieReset


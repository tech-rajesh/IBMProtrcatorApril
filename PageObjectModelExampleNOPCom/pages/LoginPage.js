const { element, by, browser } = require("protractor");




let LoginPage = function(){


    let txtUserName = element(by.css('#Email'));
    let txtPassword = $('#Password')
    let btnLogin = $('[type="submit"]')



    this.enterUserName = async function(user){
        await txtUserName.clear()
        await txtUserName.sendKeys(user)

    }

    this.enterPassword = async function(pass){
        await txtPassword.clear().sendKeys(pass)

    }

    this.clickLoginButton = async function(){
        await btnLogin.click()

    }

    this.verifyAppTitle = async function(appTitle){
        

        expect( await browser.getTitle()).toContain(appTitle)

    }


}


module.exports = new LoginPage();
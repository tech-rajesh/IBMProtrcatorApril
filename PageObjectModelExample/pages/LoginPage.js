const { element, by, browser } = require("protractor");




let LoginPage = function(){


    let txtUserName = element(by.name('txtUsername'));
    let txtPassword = element(by.name('txtPassword'))
    let btnLogin = element(by.css('.button'))



    this.enterUserName = async function(user){
        await txtUserName.sendKeys(user)

    }

    this.enterPassword = async function(pass){
        await txtPassword.sendKeys(pass)

    }

    this.clickLoginButton = async function(){
        await btnLogin.click()

    }

    this.verifyAppTitle = async function(appTitle){
        

        expect( await browser.getTitle()).toContain(appTitle)

    }


}


module.exports = new LoginPage();
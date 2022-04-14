const { browser, element, by } = require("protractor")
const loginPage = require('../pages/LoginPage')
const data = require('../../cred.json')


describe('HRM login Example', function(){


    beforeAll(async function(){


        browser.waitForAngularEnabled(false)
       await  browser.get(data.url)
        browser.manage().window().maximize()


    })

afterAll(function(){
    browser.sleep(5000)

})


it('TC_001 - verify login with valid user credenatils', async function(){
    // await element(by.name('txtUsername')).sendKeys('Admin')
    // await element(by.name('txtPassword')).sendKeys('Admin')
    // await element(by.css('.button')).click()


    //methods from specific Pages
    loginPage.enterUserName(data.userName)
    loginPage.enterPassword(data.password)
    loginPage.clickLoginButton()


    //validation Step

    loginPage.verifyAppTitle(data.AppTitle)





})


})
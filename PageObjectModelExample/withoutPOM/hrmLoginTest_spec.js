const { browser, element, by } = require("protractor")

describe('HRM login Example', function(){


    beforeAll(async function(){


        browser.waitForAngularEnabled(false)
       await  browser.get('https://opensource-demo.orangehrmlive.com/')
        browser.manage().window().maximize()


    })

afterAll(function(){
    browser.sleep(5000)

})


it('TC_001 - verify login with valid user credenatils', async function(){
    await element(by.name('txtUsername')).sendKeys('Admin')
    await element(by.name('txtPassword')).sendKeys('Admin')
    await element(by.css('.button')).click()

})


})
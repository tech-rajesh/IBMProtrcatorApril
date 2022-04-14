const { browser, element, by } = require("protractor")

describe('Locator Example', ()=>{



    it('Sample', async function(){

        browser.waitForAngularEnabled(false)
        browser.get('https://opensource-demo.orangehrmlive.com/')

        browser.manage().window().maximize();



        //ID
        await element(by.id('txtUsername')).sendKeys('Admin')

        //name
        await element(by.name('txtPassword')).sendKeys('Admin')

        browser.sleep(1000)
        //class
        await element(by.className('button')).click()

        browser.sleep(1000)

        //linkText
        await element(by.linkText('Forgot your password?')).click()


        //xpath
        await element(by.xpath('//input[@value="Cancel"]')).click()


        browser.sleep(5000)

        //patiallinkText
        await element(by.partialLinkText('your password?')).click()


        //css
        await element(by.css('input[value="Cancel"]')).click()

        browser.sleep(2000)

        //patiallinkText
        await element(by.partialLinkText('your pas')).click()

        browser.sleep(5000)

    })


})
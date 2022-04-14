const { browser, element, by, $ } = require("protractor")


describe('PayTm Example',  function(){


    beforeAll(async ()=>{

        browser.waitForAngularEnabled(false)
        await browser.get('https://paytm.com/')
        browser.manage().window().maximize();


    })


    it('verify Frame ', async ()=>{

        //click on  sign
        await element(by.xpath("//span[contains(text(),'Sign')]")).click()


        //Frame
        //index - 0
        //let myFrame = await element(by.xpath("//iframe")).getWebElement()

        //await browser.switchTo().frame(0)
        await browser.switchTo().frame(await element(by.xpath("//iframe")).getWebElement())


        //click on watch video
        await element(by.xpath("//span[contains(text(),'Watch')]")).click()


        let verificationHeading = await $('p.heading').getText()

        console.log(verificationHeading);

        expect(verificationHeading).toContain('Paytm Web')

    })


})
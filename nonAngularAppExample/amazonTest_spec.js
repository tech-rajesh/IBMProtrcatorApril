const { browser, element, by } = require("protractor")

describe('GoDaddy Application Testing', ()=>{



    beforeAll(function(){

        //browser.ignoreSynchronization(true)
        browser.waitForAngularEnabled(false)
        browser.get('https://www.amazon.in/')


    })

    afterAll(function(){

        
        browser.sleep(4000)
        browser.close()

    })


    it('SearchTest', async function(){

        //element(by.xpath('//input[@name="domainToCheck"]')).sendKeys('Protractor')

        element(by.xpath('//h2[contains(text(),"perfect birthday")]//parent::div//following-sibling::div[contains(@class,"foot")]/a[text()="See more"]')).click()

        let actualTitle = await browser.getTitle()
        console.log("--------------" +actualTitle);
        
        
        expect(browser.getTitle()).toContain('Birthday')

    })




})
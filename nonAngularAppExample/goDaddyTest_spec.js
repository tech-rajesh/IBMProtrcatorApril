const { browser, element, by } = require("protractor")

describe('GoDaddy Application Testing', ()=>{



    beforeAll(function(){

        //browser.ignoreSynchronization(true)
        browser.waitForAngularEnabled(false)
        browser.get('https://www.godaddy.com/en-in')


    })

    afterAll(function(){

        
        browser.sleep(4000)
        browser.close()

    })


    it('SearchTest', function(){

        //element(by.xpath('//input[@name="domainToCheck"]')).sendKeys('Protractor')
        browser.getTitle()
        browser.getCurrentUrl()



        //validation
        expect(browser.getTitle()).toContain('')
        expect(browser.getCurrentUrl()).toContain('Birthday-store')

        element(by.xpath('//span[text()="Search Domain"]//ancestor::div[@class="input-group"]/span/input')).sendKeys('Protractor Automation')


    })




})
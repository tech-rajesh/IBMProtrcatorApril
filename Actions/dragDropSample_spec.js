const { browser, element, by } = require("protractor")

describe('Action Example', function(){


    beforeAll(function(){

        browser.waitForAngularEnabled(false);
        browser.get('https://www.globalsqa.com/demo-site/draganddrop/')
        browser.manage().window().maximize()

    })




    it('Perform Drag Drop test', async function(){


        browser.switchTo().frame(2)



        let image3 = element(by.xpath('//img[contains(@src,"tatras3")]'));
        let target = element(by.css('id="trash"'));



        browser.actions().dragAndDrop(await image3.getWebElement(), await target.getWebElement()).perform();






    })


})
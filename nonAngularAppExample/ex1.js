const { browser, element, by } = require("protractor")

describe('amazonExample', function(){

    beforeAll(function(){

        browser.get('')


    })

    afterAll(function(){

        browser.sleep(5000)


    })


    it('click on birthday', function(){

        element(by.xpath('')).click()

        



    })



})
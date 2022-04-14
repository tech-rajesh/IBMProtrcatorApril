const { browser, element, by } = require("protractor")


describe('smokeTest', function(){


   it('AddFourNumber', function(){

    //launch application on browser
    browser.get('https://juliemr.github.io/protractor-demo/')

   
    //enter number
    
    element(by.css('input[ng-model="first"]')).sendKeys('9199')
    element(by.xpath('//input[@ng-model="second"]')).sendKeys('1919')
    
    //click on Go button
    element(by.css('#gobutton')).click()
    
    browser.sleep('4000')



   })



})
const { browser, element, by, $ } = require("protractor")


describe('smokeTest', function(){


   it('AddThreeNumber', function(){

    //launch application on browser
    browser.get('https://juliemr.github.io/protractor-demo/')

   
    //enter number
    
    element(by.css('input[ng-model="first"]')).sendKeys('919')
    element(by.xpath('//input[@ng-model="second"]')).sendKeys('191')
    
    //click on Go button
    element(by.css('#gobutton')).click()
    
    //Get the results
    //shortcut on css

    //element(by.css('h2.ng-binding')).getText()
    let actualResult  = $('h2.ng-binding').getText()

    //validate

    expect(actualResult).toEqual('1110')


    browser.sleep('4000')



   })



})
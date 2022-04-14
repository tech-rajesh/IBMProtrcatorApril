const { browser, element, by } = require("protractor")

describe('superCaluculator Test', function(){



    beforeAll(function(){
        browser.get('https://juliemr.github.io/protractor-demo/')

    })

    it('Add Two Digit number', function(){

        element(by.model('first')).sendKeys('19')
        element(by.model('second')).sendKeys('91')

        element(by.buttonText('Go!')).click();


        let result = element(by.css('.ng-binding')).getText()
        //validation 
        expect(result).toEqual('110')

    })


    it('Add Three Digit number', function(){

        element(by.model('first')).sendKeys('191')
        element(by.model('second')).sendKeys('919')

        element(by.buttonText('Go!')).click();

        //validation 
        expect(element(by.css('.ng-binding')).getText()).toEqual('1110')

    })


    it('Add Four Digit number', function(){

        element(by.model('first')).sendKeys('1911')
        element(by.model('second')).sendKeys('9199')

        element(by.buttonText('Go!')).click();
    //validation 
    expect(element(by.css('.ng-binding')).getText()).toEqual('11110')

    })

    it('Add Five Digit number', function(){

        element(by.model('first')).sendKeys('19111')
        element(by.model('second')).sendKeys('91991')

        element(by.buttonText('Go!')).click();
    //validation 
    expect(element(by.css('.ng-binding')).getText()).toEqual('111109')

    })

    afterAll(function(){

        browser.sleep(4000)


    })

    afterEach(function(){
        browser.sleep(2000)

    })



})



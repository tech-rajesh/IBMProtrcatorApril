

const { browser } = require('protractor')
const sampleData = require('./ApplicationData.json')

//const sampleData = require('../cred.json')


describe('HRM login Example', function(){


    beforeAll(()=>{

        //non agular application
        browser.waitForAngularEnabled(false)

        browser.get(sampleData.url)

       // browser.navigate().forward()
        browser.manage().window().maximize();


    })

    afterAll(function(){

        browser.sleep(7000);
        
    })


    it('verifyLogin', async function(){



        //ID
        await element(by.id('txtUsername')).sendKeys(sampleData.userName)

        //name
        await element(by.name('txtPassword')).sendKeys(sampleData.password)

        browser.sleep(1000)
        //class
        await element(by.className('button')).click()

        browser.sleep(1000)


        expect(browser.getTitle()).toContain(sampleData.AppTitle)



    })



})

// const appData = require('./')


describe('HRM login Example', function(){


    beforeAll(()=>{

        //non agular application
        browser.waitForAngularEnabled(false)

        browser.get('https://opensource-demo.orangehrmlive.com/')
        browser.manage().window().maximize();


    })

    afterAll(function(){

        browser.sleep(7000);
        
    })


    it('verifyLogin', async function(){



        //ID
        await element(by.id('txtUsername')).sendKeys('Admin')

        //name
        await element(by.name('txtPassword')).sendKeys('admin123')

        browser.sleep(1000)
        //class
        await element(by.className('button')).click()

        browser.sleep(1000)


    })



})
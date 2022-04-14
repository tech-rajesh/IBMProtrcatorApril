const { browser, $, element, by } = require("protractor")



describe('handle Alert', function(){



    beforeAll(()=>{

        //non agular application
        browser.waitForAngularEnabled(false)

        browser.get('http://www.uitestpractice.com/Students/Switchto')
        browser.manage().window().maximize();


    })

    afterAll(function(){

        browser.sleep(5000);
        //browser.quit();
    })



    

    
    it('Prompt Alert', async function(){

        //element(by.css('input[onclick="myFunction1()"]'));
        await $('button#prompt').click();          //prompt get generated
        
        let AlertText = ( await browser.switchTo().alert().getText());
        
        let name = 'Shiva';

        //validation Steps

       expect(AlertText).toEqual("Enter your name")
       expect(AlertText).toContain("your name")


       await browser.switchTo().alert().sendKeys(name)


        await browser.sleep(4000)
        //accept
        await browser.switchTo().alert().accept()

        let ConfirmationText = ( await $('div#demo').getText());

        console.log("*********"  + ConfirmationText);
        expect(ConfirmationText).toContain(name)


    })



})
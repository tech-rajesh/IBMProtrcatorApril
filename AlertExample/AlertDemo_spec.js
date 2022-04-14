const { browser, $, element, by } = require("protractor")



describe('handle Alert', function(){



    beforeAll(()=>{

        //non agular application
        browser.waitForAngularEnabled(false)

        browser.get('http://only-testing-blog.blogspot.com/2013/11/new-test.html')
        browser.manage().window().maximize();


    })

    afterAll(function(){

        browser.sleep(4000);
        //browser.quit();
    })



    it('simple Alert', async function(){

        //element(by.css('input[onclick="myFunction1()"]'));
        await $('input[onclick="myFunction1()"]').click();          //alert get generated

        //handle alert
        //generic - alert/frame/window

        //Alert - accept - ok
        //dismiss --- cancel //// esc 
        //getText --- fetch text from alert
        //sendKeys ---- enter value to alert

        //await browser.sleep(4000)
        //await browser.sleep(4000)
        //(await browser.switchTo().alert()).accept()
        let AlertText = ( await browser.switchTo().alert().getText());

        console.log(AlertText);

        //validation Steps
        await expect(AlertText).toEqual('Hi.. This is alert message!')
        await expect(AlertText).toContain('alert message')
        //accept
        //await browser.switchTo().alert().accept();

        //dismiss
        (await browser.switchTo().alert().dismiss())


    })


    it('confirm Alert', async function(){

        //element(by.css('input[onclick="myFunction1()"]'));
        await element(by.xpath("//button[text()='Show Me Confirmation']")).click();          //alert get generated
        
        let AlertText = ( await browser.switchTo().alert().getText());
        
        //validation Steps

       expect(AlertText).toEqual("Press 'OK' or 'Cancel' button!")
       expect(AlertText).toContain("'OK' or 'Cancel'")

        //dismiss
        await browser.switchTo().alert().dismiss()

        //validation step

        let confirmAlert = await $('#demo').getText()
        expect(confirmAlert).toContain('Cancel')


    })


    
    it('Prompt Alert', async function(){

        //element(by.css('input[onclick="myFunction1()"]'));
        await element(by.xpath("//button[text()='Show Me Prompt']")).click();          //alert get generated
        
        let AlertText = ( await browser.switchTo().alert().getText());
        
        //validation Steps

       expect(AlertText).toEqual("Your Name Please")
       expect(AlertText).toContain("Name Please")


       await browser.switchTo().alert().sendKeys('Anita')


        //accept
        await browser.switchTo().alert().accept()

        


    })



})
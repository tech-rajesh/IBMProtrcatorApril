const { browser, element, by } = require("protractor")

describe("Actions", () => {

    beforeAll(async () => {
        browser.waitForAngularEnabled(false)
        await browser.get("https://demo.guru99.com/test/simple_context_menu.html");
        browser.manage().window().maximize()
    })

    fit("RightClick", async () => {
        await browser.sleep(5000)
        


        let rightButton  = await element(by.xpath("//span[text()='right click me']"));
        let doubleClickButton  = await element(by.xpath("//button[text()='Double-Click Me To See Alert']"));
        
        //await browser.actions().doubleClick(rightButton.getWebElement).perform()

        //approach1
        // await browser.actions().mouseMove(rightButton).perform();
        // await browser.actions().click(protractor.Button.RIGHT).perform();


        //approach2
        await browser.actions().mouseMove(rightButton).click(protractor.Button.RIGHT).perform();



        //clcik on delete button
        let deleteButton  = await element(by.xpath("//span[text()='Delete']"));
        deleteButton.click();

    })

    it("DoubleClick", async () => {
        await browser.sleep(5000)
        


        let rightButton  = await element(by.xpath("//span[text()='right click me']"));
        let doubleClickButton  = await element(by.xpath("//button[text()='Double-Click Me To See Alert']"));
        
        //await browser.actions().doubleClick(rightButton.getWebElement).perform()

        
        //Method1
        await browser.actions().mouseMove(doubleClickButton).perform();
        //await browser.actions().click(protractor.Button.RIGHT).perform();
        await browser.actions().doubleClick().perform();


        

    })


    it("RightClick2", async () => {
        await browser.sleep(5000)
        


        let rightButton  = await element(by.xpath("//span[text()='right click me']"));
        let doubleClickButton  = await element(by.xpath("//button[text()='Double-Click Me To See Alert']"));
        
        //await browser.actions().doubleClick(rightButton.getWebElement).perform()

        
        //Method1
        await browser.actions().mouseMove(doubleClickButton).perform();
        //await browser.actions().click(protractor.Button.RIGHT).perform();
        await browser.actions().doubleClick().perform();


        

    })


    afterAll(async () => {
        await browser.sleep(5000);
    })
})
describe('demo',()=>{
    it('first sample',async()=>{
        await browser.url('https://www.flipkart.com/')
        await browser.$('[name="q"]').setValue("dresses")
        await browser.keys('Enter')
        await browser.scroll(0,500)
        browser.pause(8000)
        await wdioExpect(browser).toHaveUrl('htps://www.flipkart.com/search?q=dresses&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off')
    })
})
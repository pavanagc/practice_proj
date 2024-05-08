// import expect from "chai"
 
import { expect } from "chai"
import { expect as exp } from '@wdio/globals'


describe('',()=>{

    it('',async()=>{
        await browser.url('')
        let url=await browser.getUrl()
        expect(url).to.be.equal('https://www.instagram.com/')
        browser.pause(3000)
        await browser.url('https://www.flipkart.com/')
        await browser.$('[name="q"]').setValue("dresses")
        await browser.keys('Enter')
        await browser.scroll(0,500)
        browser.pause(8000)
        exp(browser).toHaveUrl('https://www.flipkart.com/search?q=dresses&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off')

    })
})
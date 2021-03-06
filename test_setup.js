var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')
const chromedriver = require('chromedriver')
const {Builder, By, Key, until} = require('selenium-webdriver');
const { doesNotMatch } = require('assert');
const { assert } = require('console');

const TMS_BASE_URL = 'https://dmb-qa.dgcdn.net/';

async function login(mDriver) {
    let driver = mDriver;
        try {
            await driver.get('https://dmb-qa.dgcdn.net/');
            var usernameField = await driver.findElement(By.name('Input.Email'))
            var passwordField = await driver.findElement(By.name('Input.Password'))

            //enter username
            usernameField.sendKeys('bdagg@diamondgame.com');
            //enter password
            passwordField.sendKeys('Diamond1!');
            
           
            var actions = driver.actions({async:true})
            var submit = await driver.findElement(By.id('btnLogin'))

            //click mouse
            actions.move({origin:submit}).press().perform();
            //release mouse
            actions.move({origin:submit}).release().perform();

            //wait until url changes to homepage
            await driver.wait(until.urlIs('https://dmb-qa.dgcdn.net/'), 5000);
        } catch (e) {

        }
}

describe('Login page', function() {
    it('User is logged in with correct credentials', async function() {
        
        this.timeout(0);
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get(TMS_BASE_URL);
            var usernameField = await driver.findElement(By.name('Input.Email'))
            var passwordField = await driver.findElement(By.name('Input.Password'))

            //enter username
            usernameField.sendKeys('bdagg@diamondgame.com');
            //enter password
            passwordField.sendKeys('Diamond1!');
            
           
            var actions = driver.actions({async:true})
            var submit = await driver.findElement(By.id('btnLogin'))

            //click mouse
            actions.move({origin:submit}).press().perform();
            //release mouse
            actions.move({origin:submit}).release().perform();

            //wait until url changes to homepage
            await driver.wait(until.urlIs('https://dmb-qa.dgcdn.net/'), 5000);
            await assert(driver.getCurrentUrl() == 'https://dmb-qa.dgcdn.net/')
        } finally {
            await driver.quit();
      
        }
        
      
    })
})


import puppeteer from 'puppeteer';

const url = "https://cpp.joinhandshake.com/login"

//inputs (assign your bronco name and password for testing)
var broncoName;
var password;

//initializes browser for background work
async function initBrowser(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

//delay function
function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time)
    });
}

//scrapes data from inputs in site to do login in function (duo needed)
async function login(page){
    await page.click("#ui-id-1 > div:nth-child(1) > div.sso-button-wrapper > a");
    await page.waitForNavigation();    
    await page.type("input[id='username']", broncoName);
    await page.type("input[id='password']", password);
    await page.$eval("button[type='submit']", elem => elem.click());
    console.log("Check duo for approval");
    await page.waitForNavigation();
    await page.waitForSelector("#trust-browser-button");
    await page.click("#trust-browser-button");    
}

//scrolls through job listings
async function scroll(page){
    delay(1000);
    await page.waitForSelector("button[class='sc-dkBdza fdbBmQ sc-hTRxPq jpnxkN']");
    await page.$eval("button[class='sc-dkBdza fdbBmQ sc-hTRxPq jpnxkN']", elem => elem.click());
    await page.waitForSelector('nav');
    const links = await page.$$('nav a');

    for (const link of links) {
        const text = await page.evaluate(el => el.textContent?.trim(), link);
        if (text === 'Jobs') {
            await link.click();
            break;
        }
    }
    await page.waitForNavigation();
    delay(1000)
    await page.waitForSelector('input[role="combobox"], input[type="text"]', { visible: true });
    await page.type('input[role="combobox"], input[type="text"]', 'Los Angeles');
    await page.keyboard.press('Enter');
}

//main method 
async function getInPls(){
    const page = await initBrowser();
    await login(page);
    page.waitForNavigation();
    await scroll(page);
}

getInPls();

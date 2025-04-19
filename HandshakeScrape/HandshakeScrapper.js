import puppeteer from 'puppeteer';

const url = "https://cpp.joinhandshake.com/login"

var broncoName;
var password;

async function initBrowser(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}


async function login(page){
    await page.click("#ui-id-1 > div:nth-child(1) > div.sso-button-wrapper > a");
    await page.waitForNavigation();
    
    //await page.click('a:has-text("CPP Login")');
    await page.type("input[id='username']", broncoName);
    await page.type("input[id='password']", password);
    await page.$eval("button[type='submit']", elem => elem.click());
    }

async function getInPls(){
    const page = await initBrowser();
    await login(page);
}

getInPls();

import puppeteer from 'puppeteer';

const url = "https://cpp.joinhandshake.com/login"

//inputs (assign your bronco name and password for testing)
var broncoName = "exampleName";
var password = "examplePassword";

//initializes browser for background work
async function initBrowser(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

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
    //await page.waitForNavigation();
    
}

//scrolls through job listings
async function scroll(page){
    delay(1000);
    await page.waitForSelector("button[class='sc-dkBdza fdbBmQ sc-hTRxPq jpnxkN']");
    await page.$eval("button[class='sc-dkBdza fdbBmQ sc-hTRxPq jpnxkN']", elem => elem.click());
    //await page.click('a:contains("Jobs")');
    //await page.click("body > div:nth-child(4) > div:nth-child(3) > nav > div.sc-gVzlyS.sc-geOqsp.fnXCXm.bimUMF > div:nth-child(5) > a")
    //await page.waitForSelector("#bootstrapping-follows-modal > div > div > div.sc-kQQmxC.eWgHxr > div.sc-gtXJFL.fdPUUJ > button")
    //await page.click("#bootstrapping-follows-modal > div > div > div.sc-kQQmxC.eWgHxr > div.sc-gtXJFL.fdPUUJ > button")
    //await page.waitForSelector("body > div:nth-child(4) > div:nth-child(3) > nav > div.sc-gVzlyS.sc-geOqsp.fnXCXm.bimUMF > div:nth-child(5) > a");
    //await page.click("body > div:nth-child(4) > div:nth-child(3) > nav > div.sc-gVzlyS.sc-geOqsp.fnXCXm.bimUMF > div:nth-child(5) > a");
}

//main method 
async function getInPls(){
    const page = await initBrowser();
    await login(page);
    page.waitForNavigation();
    await scroll(page);
}

getInPls();

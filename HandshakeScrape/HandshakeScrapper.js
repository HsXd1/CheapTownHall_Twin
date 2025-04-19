import puppeteer from 'puppeteer';

const url = "https://app.joinhandshake.com/login"

async function initBrowser(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}


async function login(page){
    await page.type("input[id='email-address-identifier'", 'ashwatprabu@gmail.com');
}

async function getInPls(){
    const page = await initBrowser();
    await login(page);
}

getInPls();

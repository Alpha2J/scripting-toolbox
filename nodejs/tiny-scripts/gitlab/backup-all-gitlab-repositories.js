/**
 * @author: Jeb.Wang
 * @date: 2023/7/9 12:35
 */
const config = require('./config.json');
const hc = require('@hellooo-stack/halo-commons');
const puppeteer = require('puppeteer');

const resultPath = './result.sh';
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(`${config.domain}/users/sign_in`);

    await page.locator('#user_login').fill(`${config.username}`);
    await page.locator('#user_password').fill(`${config.password}`);

    await page.locator('.js-sign-in-button').click();

    await getPageContent(page);
    while (true) {
        let nextPageHref = await page.evaluate(() => {
            const disabledNextElement = document.querySelector('.js-next-button.disabled');
            if (disabledNextElement) {
                return null;
            }

            const activeElement = document.querySelector('.js-pagination-page.active');
            const nextPageBtn = activeElement.nextElementSibling.querySelector('a[rel="next"]');
            if (!nextPageBtn) {
                return null;
            }

            return nextPageBtn.href;
        });
        if (!nextPageHref) {
            break;
        }

        await page.goto(nextPageHref);
        await getPageContent(page);
    }

    await browser.close();
})();

async function getPageContent(page) {
    await page.waitForSelector('.projects-list');
    const hrefs = await page.evaluate(() => {
        const ul = document.querySelector('.projects-list');
        const projectElements = ul.querySelectorAll('li .project');
        return Array.from(projectElements).map(item => item.href);
    })

    for (const href of hrefs) {
        pushItems(href);
    }
}

function pushItems(item) {
    let url = 'git clone ' + item + '.git' + ' ; ';
    hc.fileHelper.appendLineToFile(url, resultPath);
}

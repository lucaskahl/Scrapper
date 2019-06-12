const puppeteer = require("puppeteer");

const CREDS = require("./cred");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
    );

    await page.goto("https://www.facebook.com/login");

    const EMAIL_SELECTOR = "input#email";
    const PASSWORD_SELECTOR = "input#pass";
    const BUTTON_SELECTOR = "button#loginbutton";

    await page.click(EMAIL_SELECTOR);
    await page.keyboard.type(CREDS.facebooklogin);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.facebookpass);
    await page.click(BUTTON_SELECTOR);

    await page.goto("https://www.facebook.com/igrejadecristosp/?ref=bookmarks");

    await page.click("._3ixn");

    await page.waitForSelector("._2aha");
    await page.waitFor(3000);
    await page.click("._2aha");
    await page.waitFor(3000);
    await page.click("table._3m20 > tbody > tr > td > div > a > div > input");

    await page.waitForNavigation();
  } catch (e) {
    console.log("our error", e);
  }
})();

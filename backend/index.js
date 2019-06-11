const puppeteer = require("puppeteer");
const CREDS = require("./cred");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
    );

    await page.goto("https://my.bible.com/pt/sign-in");

    const EMAIL_SELECTOR = "input#signin-username";
    const PASSWORD_SELECTOR = "input#signin-password";
    const BUTTON_SELECTOR = "#signin_form button.solid-button.green.expand";

    await page.click(EMAIL_SELECTOR);
    await page.keyboard.type(CREDS.username);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);
    await page.click(BUTTON_SELECTOR);

    await page.waitForSelector(".moment");
    await page.click('.moment-bottom .md-menu a[title="Mais"]');

    setTimeout(async () => {
      await page.click("a.md-button.md-ink-ripple");
    }, 3500);

    await page.waitForSelector(".yv-votd-image");

    await page.waitForNavigation();
  } catch (e) {
    console.log("our error", e);
  }
})();

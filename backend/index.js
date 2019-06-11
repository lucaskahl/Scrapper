const puppeteer = require("puppeteer");
const fs = require("fs");
const axios = require("axios");

const CREDS = require("./cred");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
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

    await page.waitFor(1000);
    await page.waitForSelector(".yv-votd-image");

    await page.waitFor(5000);

    const images = await page.$$eval("img", i => i.map(l => l.src));
    const image = images.filter(image => image.includes("amazon"))[0];
    const imageLink = image.match(/[h]+[t]+[t]+[p]+[s]+[:]+[/]+[s]+[\s\S]+/)[0];

    const download_image = (url, image_path) =>
      axios({
        url,
        responseType: "stream"
      }).then(
        response =>
          new Promise((resolve, reject) => {
            response.data
              .pipe(fs.createWriteStream(image_path))
              .on("finish", () => resolve())
              .on("error", e => reject(e));
          })
      );

    (async () => {
      let image = await download_image(imageLink, `images/post.png`);
    })();

    await browser.close();
  } catch (e) {
    console.log("our error", e);
  }
})();

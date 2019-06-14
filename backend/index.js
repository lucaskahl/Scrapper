const puppeteer = require("puppeteer");
const fs = require("fs");
const axios = require("axios");
const crypto = require("crypto");

const CREDS = require("./cred");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    console.log("Inicializado navegadores....");

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

    console.log("Autenticado com sucesso....");

    await page.waitFor(1000);
    await page.waitForSelector(".moment");
    await page.click('.moment-bottom .md-menu a[title="Mais"]');

    setTimeout(async () => {
      await page.click("a.md-button.md-ink-ripple");
    }, 3500);

    await page.waitFor(1000);
    await page.waitForSelector(".yv-votd-image");

    console.log("Imagem selecionada com sucesso....");

    await page.waitFor(5000);

    const images = await page.$$eval("img", i => i.map(l => l.src));
    const image = images.filter(image => image.includes("amazon"))[0];
    const imageLink = image.match(/[h]+[t]+[t]+[p]+[s]+[:]+[/]+[s]+[\s\S]+/)[0];

    const token = crypto.randomBytes(8).toString("hex");

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
      let image = await download_image(imageLink, `images/${token}.png`);
    })();

    (async () => {
      try {
        const browser = await puppeteer.launch({
          headless: false,
          ignoreHTTPSErrors: true
        });
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

        await page.goto(
          "https://www.facebook.com/igrejadecristosp/?ref=bookmarks"
        );

        await page.waitFor(1000);
        await page.click("._3ixn");

        await page.waitForSelector("._2aha");
        await page.waitFor(3500);
        await page.click("ul._16vg._1oxv li:last-child > span > a");

        await page.click("div#js_1d > a");
        await page.waitFor(1000);

        const input = await page.$(
          'div table > tbody > tr > td div._3jk > input[type="file"]'
        );
        await input.uploadFile(`./images/${token}.png`);
        console.log("Fazendo upload de foto...");
        await page.waitFor(10000);

        await page.click('button[data-testid="react-composer-post-button"]');

        await page.waitFor(10000);

        console.log("Upload completo");

        await browser.close();
      } catch (e) {
        console.log("our error", e);
      }
    })();

    console.log("Processo finalizado....");

    await browser.close();
  } catch (e) {
    console.log("our error", e);
  }
})();

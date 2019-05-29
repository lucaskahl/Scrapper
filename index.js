const fetch = require("node-fetch");
const cheerio = require("cheerio");

const getData = async () => {
  const url = "https://www.bible.com/pt";

  const response = await fetch(url);
  const body = await response.text();

  const $ = cheerio.load(body);

  const data = [];
  $("div.votd-content").each((i, item) => {
    const $item = $(item);
    const verse = $item
      .find(".votd-verse")
      .text()
      .trim();

    const dailyInformation = {
      verse
    };

    data.push(dailyInformation);
  });
  console.log(data);
};

getData();

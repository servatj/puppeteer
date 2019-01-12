const puppeteer = require('puppeteer');

const workFlow = async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, heigth: 800 });
  await page.goto('http://www.zignaly.com');
  await browser.close();
}

puppeteer.launch()
.then(workFlow)
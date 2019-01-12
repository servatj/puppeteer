const puppeteer = require('puppeteer');

const workFlow = async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://www.zignaly.com');
  await page.screenshot({ path: 'zignaly.png', fullPage: true });
  await browser.close();
}

puppeteer.launch({ headless: false })
.then(workFlow)
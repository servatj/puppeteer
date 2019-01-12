const puppeteer = require('puppeteer');

const workFlow = async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  await page.goto('http://www.zignaly.com');
  await page.screenshot({ path: 'zignaly.png', fullPage: true });
  await browser.close();
}

const options = {
  path: 'zignaly-header.png',
  fullPage: false,
  clip: {
    x: 0,
    y: 0,
    width: 1280,
    height: 150
  }
}

const screenShotWithOptions = async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1208, height: 800 });
  await page.goto("https://www.google.com");
  await page.screenshot(options);
  await browser.close();
}

puppeteer.launch({ headless: false })
.then(screenShotWithOptions)




const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iphoneX = devices['iPhone X']

puppeteer.launch({headless: false})
.then(async browser => {
  const page = await browser.newPage();
  await page.emulate(iphoneX);
  await page.goto('https://zignaly.com');
  await page.screenshot({path: 'zignaly-phone.png'});
  await browser.close();
})
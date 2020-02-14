const puppeteer=require('puppeteer');

(async()=>{
  const browser=await puppeteer.launch();
  const page=await browser.newPage();

  await page.setViewport({width:1440,height:1200,deviceScaleFactor:1});
  await page.goto('https://www.amazon.in/',{waitUntil:"networkidle2"});
  await page.screenshot({path:'amazon.jpg',type:'jpeg',fullPage:true});

 await browser.close();
})();
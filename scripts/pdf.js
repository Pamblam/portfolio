const puppeteer = require('puppeteer');
(async() => {
    const url = 'http://localhost/portfolio/';
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const pdfConfig = {
        path: 'resume.pdf', // Saves pdf to disk.
        format: 'A4',
        printBackground: false,
    };
    await page.emulateMediaType('print');
    const pdf = await page.pdf(pdfConfig);
    await browser.close();
    return pdf;
})();
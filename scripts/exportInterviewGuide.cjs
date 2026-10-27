const { chromium } = require("playwright");
const { pathToFileURL } = require("url");
const path = require("path");

async function exportPdf() {
  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    const htmlPath = path.resolve(
      "Playwright_Automation_Interview_Guide_4_Years.html",
    );
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });

    await page.pdf({
      path: "Playwright_Automation_Interview_Guide_4_Years.pdf",
      format: "A4",
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: "<div></div>",
      footerTemplate:
        '<div style="font-size:8px;width:100%;text-align:center;color:#53627a">Interview preparation · <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
      margin: { top: "17mm", right: "17mm", bottom: "22mm", left: "17mm" },
    });

    console.log("Created Playwright_Automation_Interview_Guide_4_Years.pdf");
  } finally {
    await browser.close();
  }
}

exportPdf().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { test } from "../src/fixtures/pageFixture";
import contactData from "../src/data/contactUsData.json";

test("Contact Us Form", async ({ homePage, contactUsPage }) => {
  await homePage.navigate();

  await homePage.verifyHomePageVisible();

  await contactUsPage.clickContactUs();

  await contactUsPage.verifyGetInTouchVisible();

  await contactUsPage.enterContactDetails(contactData.contactUser);

  await contactUsPage.uploadDocument("src/data/sample.txt");

  await contactUsPage.acceptAlert();

  await contactUsPage.clickSubmit();

  await contactUsPage.verifySuccessMessage();

  await contactUsPage.clickHome();

  await homePage.verifyHomePageVisible();
});

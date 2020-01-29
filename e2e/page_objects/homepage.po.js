const helper = require('protractor-helper');
const faker = require('faker');

const bttnCompose = element(by.xpath("//div[contains(text() , 'Compose')]"));
const fieldTo = element(by.xpath("//textarea[@name='to']"));
const fieldSubject = element(by.xpath("//input[@name='subjectbox']"));
const textArea = element(by.xpath("//div[@role='textbox']"));
const bttonSend = element(by.xpath("//div[@role='button' and contains(text(),'Send')]"));
const messageSent = element(by.xpath("//span[contains(text(), 'Message sent.')]"));

const searchMail = element(by.xpath("//input[@placeholder='Search mail']"));


function clickCompose() {
  browser.sleep(5);
  helper.waitForElementPresence(bttnCompose);
  bttnCompose.click();
}

const setTo = () => {
  helper.fillFieldWithText(fieldTo , "qa.test.larissa@gmail.com");
}

const setSubject = () => {
  helper.fillFieldWithText(fieldSubject , faker.lorem.sentence());
}

const setMessage = () => {
  helper.fillFieldWithText(textArea , faker.lorem.paragraph());
}

const clickSend = () => {
  bttonSend.click();
}

const search = () => {
  helper.fillFieldWithTextAndPressEnter(searchMail , "Larissa");
}

module.exports = {
  clickCompose,
  setTo,
  setSubject,
  setMessage,
  clickSend,
  messageSent,
  search
};

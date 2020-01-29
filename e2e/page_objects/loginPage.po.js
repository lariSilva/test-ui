const helper = require('protractor-helper');

const beginSession = element(by.xpath("/html/body/div[2]/div[1]/div[4]/ul[1]/li[2]/a"));
const email = element(by.xpath("//input[@type='email']"));
const bttnProxima = element(by.xpath("//span[contains(text() , 'Próxima')]"));
const password = element(by.xpath("//input[@type='password']"));

const acessar = () => {
  browser.get('https://www.gmail.com/');
};

const login = () =>  {
  helper.waitForElementPresence(email);
  helper.fillFieldWithText(email , "qa.test.larissa@gmail.com");
  bttnProxima.click();
  helper.waitForElementPresence(password);
  helper.fillFieldWithText(password , "testlarissa2020");
  bttnProxima.click();
}

module.exports = {
  acessar,
  login
};

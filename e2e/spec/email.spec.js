const faker = require('faker/locale/pt_BR');
const helper = require('protractor-helper');
const loginPage = require('../page_objects/loginPage.po.js');
const homepage = require('../page_objects/homepage.po.js');

describe('Email feature', () => {
  //Arrange
  beforeEach(() => loginPage.acessar());

  it('Sent email', () => {
    //Act
    loginPage.login();
    homepage.clickCompose();
    homepage.setTo();
    homepage.setSubject();
    homepage.setMessage();
    homepage.clickSend();
    //Assert
    helper.waitForElementVisibility(homepage.messageSent);
  });
});
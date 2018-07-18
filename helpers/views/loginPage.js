const EC = protractor.ExpectedConditions;
const loginPageSelectors = require('../selectors').loginPage;
const helperFns = require('../helperFns');
const since = require('jasmine2-custom-message');

module.exports = {

  checkPage () {
    const pageElements = helperFns.getElements(loginPageSelectors)
    pageElements.forEach(elem => {
      since('Each element should be visible on the login page')
      .expect(elem.isDisplayed()).toBe(true);
    })
  },

  inputUsername (username) {
    const usernameElem = $(loginPageSelectors.login.email.input);
    usernameElem.sendKeys(username)
      .then(() => {
        return usernameElem.getAttribute('value');
      })
      .then(elementText => {
        expect(elementText).toMatch(username);
      })
  },

  inputPassword (password) {
    const passwordElement = $(loginPageSelectors.login.password.input);
    passwordElement.sendKeys(password)
      .then(() => {
        return passwordElement.getAttribute('value');
      })
      .then(elementText => {
        expect(elementText).toMatch(password);
      })
  },

  clickLogin () {
    helperFns.clickElement($(loginPageSelectors.login.button))
      .then(() => {
        browser.wait(
          () => {
            return browser.getCurrentUrl()
              .then(currentUrl => {
                return currentUrl.indexOf('theranest.com/agenda') !== -1;
              })
          },
          10000,
          'Browser did not navigate to the default "agenda" page at login within the specified time limit'
        )
      })
  }

}
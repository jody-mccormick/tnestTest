const EC = protractor.ExpectedConditions;
const headerSelectors = require('../selectors').header;
const helperFns = require('../helperFns');

module.exports = {

  navigateToView(viewName) {
    const viewButtonSelector = headerSelectors.viewNav[`${viewName}`]
    return browser.wait(
      EC.elementToBeClickable($(viewButtonSelector)),
      10000,
      'View selection not available within the specified time limit'
    )
      .then(() => {
        return helperFns.clickElement($(viewButtonSelector))
      })
  }

};
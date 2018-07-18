const EC = protractor.ExpectedConditions;
const clientsViewSelectors = require('../selectors').clientsView;

const since = require('jasmine2-custom-message');

module.exports = {

  checkClientIsVisibleOnPage(fullName, expectedToBeVisible) {
    browser.wait(
      EC.visibilityOf($(clientsViewSelectors.table.headers.fullName)),
      3000,
      'Clients table not visible within the specified time limit'
    );
    $$(clientsViewSelectors.table.fullName).getText()
      .then(clients => {
        console.log(clients);
        since(`${fullName} ${expectedToBeVisible ? 'should' : 'should not'} be visible on page`)
        .expect(clients.indexOf(fullName) !== -1).toBe(expectedToBeVisible); 
      })
  }

}
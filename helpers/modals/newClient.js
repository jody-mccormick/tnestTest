const EC = protractor.ExpectedConditions;
const helperFunctions = require('../helperFns');
const clientModalSelectors = require('../selectors').newClientModal;

const since = require('jasmine2-custom-message');

let z = 0;

module.exports = {

  createNew() {

    const firstName = helperFunctions.randomName(8);
    const middleName = helperFunctions.randomName(5);
    const lastName = helperFunctions.randomName(10);

    const firstNameInput = $(clientModalSelectors.firstName.input);
    const middleNameInput = $(clientModalSelectors.middleName.input);
    const lastNameInput = $(clientModalSelectors.lastName.input);

    browser.wait(
      EC.visibilityOf(firstNameInput) && EC.visibilityOf(middleNameInput) && EC.visibilityOf(lastNameInput),
      5000,
      'New Client modal window not visible within the specified time limit'
    )
      .then(() => {
        firstNameInput.sendKeys(firstName);
        middleNameInput.sendKeys(middleName);
        lastNameInput.sendKeys(lastName);
      })

    since('Form should accept input of valid first name')
    .expect(firstNameInput.getAttribute('value')).toMatch(firstName);

    since('Form should accept input of valid middle name')
    .expect(middleNameInput.getAttribute('value')).toMatch(middleName);

    since('Form should accept input of valid last name')
    .expect(lastNameInput.getAttribute('value')).toMatch(lastName);

    helperFunctions.store[`client${z.toString()}`] = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName
    }

    helperFunctions.clickElement($(clientModalSelectors.saveClient));

    browser.wait(
      EC.not(EC.presenceOf($(clientModalSelectors.backdrop))),
      10000,
      'Modal still present beyond specified time limit'
    )
  }

};
const EC = protractor.ExpectedConditions;
const helperFns = require('../helpers/helperFns');
const loginPage = require('../helpers/views/loginPage');
const headerHelper = require('../helpers/views/header');
const clientsView = require('../helpers/views/clientsView');
const newClientModal = require('../helpers/modals/newClient');
const elementSelectors = require('../helpers/selectors');

describe('Create a New Client workflow', () => {

  beforeAll((() => {
    browser.waitForAngularEnabled(false);
    browser.get('/');
  }));

  it('Should log in', () => {
    helperFns.checkPage(elementSelectors.loginPage);
    browser.wait(
      EC.visibilityOf($('#Email')) && EC.visibilityOf($('#Password')),
      10000,
      'No username input element found within the specified time limit'
    )
      .then(() => {
        loginPage.inputUsername(process.env.T_USER);
        loginPage.inputPassword(process.env.T_PASS);
      })
      .then(() => {
        loginPage.clickLogin();
      });
  });

  it('Should load "Agenda" view by default', () => {
    helperFns.checkPage(elementSelectors.agendaView);
  });

  it('Should navigate to "Clients"', () => {
    headerHelper.navigateToView('Clients');
    helperFns.checkPage(elementSelectors.clientsView);
  });

  it('Should display modal to name new client', () => {
    helperFns.clickElement($(elementSelectors.clientsView.addNewButton));
    browser.wait(
      EC.visibilityOf($(elementSelectors.newClientModal.title)),
      3000,
      'Modal not visible within the specified time limit'
    );
    helperFns.checkPage(elementSelectors.newClientModal)
  });

  it('Should be able to add a new Client', () => {
    newClientModal.createNew();
  });

  it('Should navigate back to "Clients"', () => {
    headerHelper.navigateToView('Clients');
    helperFns.checkPage(elementSelectors.clientsView);
  });

  it('Should have newly added client visible on first page', () => {
    clientsView.checkClientIsVisibleOnPage(helperFns.store.client0.firstName + ' ' + helperFns.store.client0.middleName + ' ' + helperFns.store.client0.lastName, true);
  });

});
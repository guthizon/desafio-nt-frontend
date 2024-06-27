
import './commands'
import 'cypress-mochawesome-reporter/register';
const addContext = require('mochawesome/addContext');
require('cypress-xpath');

Cypress.on('test:after:run', (test, runnable) => {
  const screenshotFileName = `${runnable.parent.title} -- ${test.title} (${test.state}).png`;
  const screenshotFilePath = `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`;
  cy.screenshot(`${runnable.parent.title} -- ${test.title} (${test.state})`);
  addContext({ test }, screenshotFilePath);
});

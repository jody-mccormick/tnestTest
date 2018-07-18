
## Automated End-To-End Testing
Welcome to the automated e2e code test for the TheraNest application.

---
### Testing tools
[Protractor](https://www.protractortest.org/#/) - An end-to-end testing framework for Angular applications. Protractor runs tests against the application using a real browser, interacting with it as a user would.
* The tests themselves are written in [Jasmine](https://jasmine.github.io/2.0/introduction.html), a familiar, behavior-driven development framework for testing JavaScript code.
* Additional tools, [jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter), and [jasmine2-custom-message](https://www.npmjs.com/package/jasmine2-custom-message), are leveraged for more descriptive pass/fail reporting purposes. Refer to their respective documentation for further information.
*  [Selemium Webdriver](https://www.seleniumhq.org/projects/webdriver/) is the under-the-hood API implemented in Protractor for driving the browser interactions.
---
### Setup

Username and Password must be added as environment variables `T_USER` and `T_PASS` prior to running tests.
All of the testing tools and required dependencies are included as a part of `npm install`. However a global installation of `protractor` is required. Run `npm i -g protractor` to install this dependency globally.
---
### Running the tests
Once all dependencies are installed, run `protractor testConfig/conf.js` from a terminal window to begin the automated test.
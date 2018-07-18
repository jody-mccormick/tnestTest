const EC = protractor.ExpectedConditions;

module.exports = {

  store: {},

  randomName (length) {
    const possible = 'abcdefghijklmnopqrstuvwxyz';
    let text = possible.charAt(Math.floor(Math.random() * possible.length)).toUpperCase();
    for (let i = 1; i < length; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },

  getElements (selectorTree) {
    let cssSelectors = [];
    function getSels(selTree) {
      return Object.keys(selTree).map(sel => {
        if(typeof selTree[sel] === 'string') {
          cssSelectors.push(selTree[sel])
        } else {
          getSels(selTree[sel]);
        };
      })
    };
    getSels(selectorTree);
    return cssSelectors.map(cssSelector => {
      return $(cssSelector);
    });
  },

  checkPage(selectors) {
    let selectorTree = {};
    function flattenTree(selTree) {
      return Object.keys(selTree).map(sel => {
        if(typeof selTree[sel] === 'string') {
          selectorTree[sel] = selTree[sel]
        } else {
          flattenTree(selTree[sel]);
        };
      })
    };
    flattenTree(selectors);
    Object.keys(selectorTree).map(selector => {
      $$(selectorTree[selector]).map(elem => {
        browser.wait(
          EC.visibilityOf(elem),
          10000,
          `${selector} element not visible within the specified time limit`
        );
        since(`${selector} element should be displayed on the page`)
        .expect(elem.isDisplayed()).toBe(true);
      })
    })
  },

  clickElement(element, timeout) {
    return browser.wait(
      EC.elementToBeClickable(element),
      timeout
    )
    .then(() => {
      return browser.actions().mouseMove(element).perform()
        .then(() => {
          element.click();
        })
    });
  }

}
import { $, $$, browser, ExpectedConditions, element, by } from 'protractor';
import { expect } from 'chai';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });
});

describe('When: I mark finished on the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('html');
    await form.submit();

    // const addButton = await $$('button[class="add-book"]');
    // addButton[0].click();

    const addButton = element(by.css('add-book'));
    browser.wait(ExpectedConditions.presenceOf(addButton), 10000);
    addButton.click();

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );

    const items = await $$('[class="reading-list-item--details--title"]');
    expect(items.length).to.be.greaterThan(0, 'At least one book in reading list');

    const finishedButton = await $$('button[class="mark-as-read"]');
    finishedButton[finishedButton.length - 1].click();

    const readButton = element(by.css('done_all'));
    browser.wait(ExpectedConditions.visibilityOf(readButton), 30000);

  });
});
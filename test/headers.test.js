import { html, fixture, expect } from '@open-wc/testing';
import '../src/header/Header.js';

describe('loan-header', () => {
  it('shows buttons for English and Dutch', async () => {
    const element = await fixture(html`<loan-header></loan-header>`);

    const englishButton = element.shadowRoot.querySelector('#en-GB');
    const dutchButton = element.shadowRoot.querySelector('#nl-NL');

    expect(englishButton).to.exist;
    expect(dutchButton).to.exist;
    expect(englishButton.textContent.trim()).to.equal('EN');
    expect(dutchButton.textContent.trim()).to.equal('NL');
  });
});

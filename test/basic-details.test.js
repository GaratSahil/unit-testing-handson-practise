import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanBasicDetails/BasicDetails.js';
import { inWords } from '../src/utils/numToWord.js';

describe('Basic details', () => {
  it('shows the loan type, amount, and period fields', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);

    expect(element.shadowRoot.querySelector('.type')).to.exist;
    expect(element.shadowRoot.querySelector('.amount')).to.exist;
    expect(element.shadowRoot.querySelector('.period')).to.exist;
  });

  it('starts with a default amount of 10000', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);

    expect(element.amount).to.equal(10000);
  });

  it('converts zero to words', () => {
    expect(inWords(0)).to.equal('Zero');
  });

  it('converts a three-digit amount to words', () => {
    expect(inWords(123)).to.equal('one hundred and twenty three only ');
  });
});

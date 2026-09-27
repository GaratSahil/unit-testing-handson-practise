import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  it('shows a button to return home', async () => {
    const element = await fixture(html`<loan-success></loan-success>`);

    expect(element.shadowRoot.querySelector('.home-btn')).to.exist;
  });
});

describe('error screen', () => {
  it('shows a button to return home', async () => {
    const element = await fixture(html`<loan-error></loan-error>`);

    expect(element.shadowRoot.querySelector('.home-btn')).to.exist;
  });
});

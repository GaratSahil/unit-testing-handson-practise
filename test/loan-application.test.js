import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  it('renders the loan dashboard', async () => {
    const element = await fixture(html`<loan-application></loan-application>`);

    const dashboard = element.shadowRoot.querySelector('dash-board');

    expect(dashboard).to.exist;
  });
});

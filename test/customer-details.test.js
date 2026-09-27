import { html, fixture, expect } from '@open-wc/testing';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  it('shows the main customer information fields', async () => {
    const element = await fixture(html`<customer-details></customer-details>`);

    expect(element.shadowRoot.querySelector('[name="first_name"]')).to.exist;
    expect(element.shadowRoot.querySelector('[name="last_name"]')).to.exist;
    expect(element.shadowRoot.querySelector('[name="email"]')).to.exist;
    expect(element.shadowRoot.querySelector('[name="mobile_number"]')).to
      .exist;
  });

  it('shows the terms checkbox and next button', async () => {
    const element = await fixture(html`<customer-details></customer-details>`);

    expect(element.shadowRoot.querySelector('lion-checkbox-group')).to.exist;
    expect(element.shadowRoot.querySelector('#nextbtn')).to.exist;
  });
});
